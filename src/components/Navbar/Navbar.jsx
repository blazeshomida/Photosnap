"use client";

import Styles from "./Navbar.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../SVG/Logo/Logo";
import Button from "../Button/Button";
import HamburgerToggle from "../SVG/Menu/HamburgerToggle";
import CloseMenu from "../SVG/Menu/CloseMenu";

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState("closed");


	const navWrapper = `${Styles["nav-wrapper"]} ${
		mobileMenu === "open"
			? Styles["open"]
			: mobileMenu === "opening"
			? Styles["opening"]
			: mobileMenu === "closing"
			? Styles["closing"]
			: 'closed'
	}`;

	function toggleMenu() {
		if (mobileMenu === "open") {
			setMobileMenu("closing")
			setTimeout(() => {
				setMobileMenu("closed");
			}, 500);
			return;
		} ;

		setMobileMenu("opening");

		setTimeout(() => {
			setMobileMenu("open");
		}, 500);
	}

	return (
		<nav className={Styles["primary-navbar"]}>
			<Logo toggleMenu={mobileMenu === 'open' && toggleMenu} color={'black'}/>

			{mobileMenu !== 'closed' ? <CloseMenu toggleMenu={toggleMenu} /> : <HamburgerToggle toggleMenu={toggleMenu} />}
			<div className={navWrapper}>
				<ul className={Styles["nav-list"]} role="list">
					<li className={Styles["nav-link"]}>
						<Link href="/stories" onClick={mobileMenu === 'open' && toggleMenu}>Stories</Link>
					</li>
					<li className={Styles["nav-link"]}>
						<Link href="/features" onClick={mobileMenu === 'open' && toggleMenu}>Features</Link>
					</li>
					<li className={Styles["nav-link"]}>
						<Link href="/pricing" onClick={mobileMenu === 'open' && toggleMenu}>Pricing</Link>
					</li>
				</ul>
				<Button type={"nav"}>Get an invite</Button>
			</div>
		</nav>
	);
};

export default Navbar;
