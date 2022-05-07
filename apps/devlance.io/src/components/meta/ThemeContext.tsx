import React, { createContext, useState, useEffect } from "react";

const getInitialTheme = () => {
	if(typeof window !== "undefined" && window.localStorage) {
		const storedPrefs = window.localStorage.getItem("theme");
		if(typeof storedPrefs === "string") return storedPrefs;
		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		return userMedia.matches ? "dark" : "light";
	}
	return "light";
}

const ThemeProvider = ({ initialTheme, children }: { initialTheme?: string, children: React.ReactNode }) => {
	const [ theme, setTheme ] = useState(getInitialTheme);
	const ThemeContext = createContext({ theme, setTheme });

	const rawSetTheme = (themeToSet: string) => {
		const root = window.document.documentElement;
		const isDark = themeToSet === "dark";

		root.classList.remove(isDark ? "light" : "dark");
		root.classList.add(themeToSet);

		localStorage.setItem("theme", themeToSet);
	}

	if(initialTheme) rawSetTheme(initialTheme);

	useEffect(() => rawSetTheme(theme ?? "light"), [theme]);

	return (<>
		{/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	</>);
}

ThemeProvider.defaultProps = {
	initialTheme: "light"
}

export default ThemeProvider;
