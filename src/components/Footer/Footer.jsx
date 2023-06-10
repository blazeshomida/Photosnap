import React from "react";
import Logo from "../SVG/Logo/Logo";
import Styles from "./Footer.module.scss";
import Link from "next/link";
import Facebook from "../SVG/Social Icons/Facebook";
import Youtube from "../SVG/Social Icons/Youtube";
import Twitter from "../SVG/Social Icons/Twitter";
import Pinterest from "../SVG/Social Icons/Pinterest";
import Instagram from "../SVG/Social Icons/Instagram";

const Footer = () => {
	return (
		<footer className={Styles["footer"]}>
			<div className={Styles["footer-container"]}>
				<div className={Styles["footer-main"]}>
					<Logo color={"white"} />
					<ul className={Styles["nav-list"]} role="list">
						<li className={Styles["nav-link"]}>
							<Link href="/">Home</Link>
						</li>
						<li className={Styles["nav-link"]}>
							<Link href="/stories">Stories</Link>
						</li>
						<li className={Styles["nav-link"]}>
							<Link href="/features">Features</Link>
						</li>
						<li className={Styles["nav-link"]}>
							<Link href="/pricing">Pricing</Link>
						</li>
					</ul>
					<div className={Styles["social-wrapper"]}>
						<Facebook />
						<Youtube />
						<Twitter />
						<Pinterest />
						<Instagram />
					</div>
				</div>
				<div className={Styles["footer-extra"]}>
					<div className={Styles["link-wrapper"]}>
						<a href="/" className="heading-4">
							Get an invite
						</a>
						<a href="/" className={Styles["arrow"]}>
							<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
								<g fill="none" fill-rule="evenodd" stroke="currentColor">
									<path d="M0 7h41.864M35.428 1l6 6-6 6" />
								</g>
							</svg>
						</a>
					</div>
					<p className={Styles["copyright"]}>
						Copyright 2019. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
