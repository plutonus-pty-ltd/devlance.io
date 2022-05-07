import React from "react";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "../meta/NoScrollLink";

const linkActive = (href: string, path: string): boolean => {
	if(href === "/") return href === path;
	return path.startsWith(href);
}

const Navigation = ({ links }: { links: { name: string, href: string }[] }) => {
	const router = useRouter();

	return (
		<AnimateSharedLayout>
			<nav className="flex">
				{links.map(({ name, href }) => (
					<Link key={name} href={href}>
						<a className="mr-6 sm:mr-8 flex flex-col relative">
							{name}
							{linkActive(href, router.asPath) && (
								<motion.div layoutId="navigation-underline" className="navigation-underline" animate />
							)}
						</a>
					</Link>
				))}
			</nav>
		</AnimateSharedLayout>
	);
}

export default Navigation;
