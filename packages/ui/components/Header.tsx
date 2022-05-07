import React from "react";
import Image from "next/image";
import Link from "../meta/NoScrollLink";
import Navigation from "./Navigation";

const Header = ({ links }: { links: { name: string, href: string }[] }) => (
	<header className="w-full fixed flex flex-row justify-between items-center h-16 md:h-20 border-b z-50 shadow-md px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96 bg-gray-100 dark:bg-gray-800 border-gray-300 dar:border-gray-600 text-gray-900 dark:text-gray-50">
		<Link href="/" passHref={true}>
			<a className="flex flex-row items-center text-gray-100 text-xl font-bold">
				<span className="hidden sm:block">Devlance</span>
				<span className="block sm:hidden">DL</span>
				<small><sup className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500">Beta</sup></small>
			</a>
		</Link>
		<div className="flex flex-row items-center">
			<Navigation links={links} />
		</div>
	</header>
);

export default Header;
