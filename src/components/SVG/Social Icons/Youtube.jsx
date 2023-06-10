import React from "react";
import Styles from "./Socials.module.scss";

const Youtube = () => {
	return (
		<a className={Styles["logo-wrapper"]}>
			<svg
				className={Styles["logo-solid"]}
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="20"
			>
				<defs>
					<linearGradient id="youtube" x1="0%" x2="100%" y1="100%" y2="0%">
						<stop offset="0%" stop-color="#D3205A" />
						<stop offset="100%" stop-color="#FF5A5A" />
					</linearGradient>
				</defs>
				<path
					fill="#FFF"
					d="M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z"
					transform="translate(-33)"
				/>
			</svg>

			<svg
				className={Styles["logo-gradient"]}
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="20"
			>
				<defs>
					<linearGradient id="youtube" x1="0%" x2="100%" y1="100%" y2="0%">
						<stop offset="0%" stop-color="#D3205A" />
						<stop offset="100%" stop-color="#FF5A5A" />
					</linearGradient>
				</defs>
				<path
					fill="url(#youtube)"
					d="M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z"
					transform="translate(-33)"
				/>
			</svg>
		</a>
	);
};

export default Youtube;
