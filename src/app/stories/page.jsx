import Styles from "./page.module.scss";
import StoriesCard from "@/components/StoriesCard/StoriesCard";
import data from "../../data/data.json";
import Image from "next/image";

const Stories = () => {
	const stories = data.stories;

	return (
		<>
			<section className={Styles["stories-hero"]}>
				{stories.map((story) => (
					<>
						{story.role.includes("gallery-hero") && (
							<>
								<Image
									className={Styles["hero-image"]}
									src={story.path}
									width={story.width}
									height={story.height}
									alt={story.title}
								/>
								<div className={Styles["hero-content"]}>
									<p className={Styles["hero-subheading"]}>LAST MONTH’S FEATURED STORY</p>
									<h1 className={Styles["hero-title"]}>{story.title}</h1>
									<div>
										<span>{story.date}</span>
										<span className={Styles["hero-author"]}>
											by {story.author}
										</span>
									</div>
									<p>
										The dissected plateau area, while not actually made up of
										geological mountains, is popularly called "mountains,"
										especially in eastern Kentucky and West Virginia, and while
										the ridges are not high, the terrain is extremely rugged.
									</p>
									<div className={Styles["link-wrapper"]}>
										<a href="/" className="heading-4">
											READ STORY
										</a>
										<a href="/" className={Styles["arrow"]}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="43"
												height="14"
											>
												<g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
												>
													<path d="M0 7h41.864M35.428 1l6 6-6 6" />
												</g>
											</svg>
										</a>
									</div>
								</div>
							</>
						)}
					</>
				))}
			</section>
			<section className={Styles["stories-section"]}>
				{stories.map((story, index) => (
					<>
						{!story.role.includes("gallery-hero") && (
							<StoriesCard
								key={index}
								date={story.date}
								title={story.title}
								author={story.author}
								width={story.width}
								height={story.height}
								path={story.path}
								role={story.role}
							/>
						)}
					</>
				))}
			</section>
		</>
	);
};

export default Stories;
