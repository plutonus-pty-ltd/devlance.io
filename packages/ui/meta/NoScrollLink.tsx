import React from "react";
import Link from "next/link";

const NoScrollLink = ({ children, href, passHref }: { children: React.ReactNode, href: string, passHref?: boolean }) => (
	<Link href={href} passHref={passHref ?? false} scroll={false}>
		{children}
	</Link>
);

export default NoScrollLink;
