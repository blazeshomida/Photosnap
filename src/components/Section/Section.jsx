import "@/styles/_layouts.scss";
import Image from "next/image";
import Styles from "./Section.module.scss";

const Section = ({
	hero,
	headingSize,
	title,
	description,
	buttonText,
	imagePath,
	imageWidth,
	imageHeight,
	inverse = false,
	imagePosition,
	linkHref = '/'
}) => {
	const contentClass = `${Styles.content} ${inverse ? Styles.inverse : ""} ${
		hero && Styles.hero
	}`;
	const sectionClass = `${Styles.section} ${
		imagePosition === "right" ? Styles["image-right"] : ""
	}`;

	return (
		<section className={sectionClass}>
			<div className={Styles["image-wrapper"]}>
				<Image
					className={Styles.image}
					src={imagePath}
					width={imageWidth}
					height={imageHeight}
					alt={description}
				/>
			</div>
			<div className={contentClass}>
				{headingSize === "h1" ? (
					<h1 className="heading-1">{title}</h1>
				) : (
					<h2 className="heading-1">{title}</h2>
				)}
				<p className={Styles["description"]}>{description}</p>
				<div>
					<div className={Styles["link-wrapper"]}>
						<a href={linkHref} className="button-text">
							{buttonText}
						</a>
						<a href={linkHref} className={Styles["arrow"]}>
							<svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
								<g fill="none" fill-rule="evenodd" stroke="currentColor">
									<path d="M0 7h41.864M35.428 1l6 6-6 6" />
								</g>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section;
