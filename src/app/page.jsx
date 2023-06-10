import Image from "next/image";
import data from "../data/data.json";
import Section from "@/components/Section/Section";
import Styles from "./page.module.scss";
import StoriesCard from "@/components/StoriesCard/StoriesCard";
import Feature from "@/components/Feature/Feature";

export default function Home() {
	const sections = data.sections;
	const stories = data.stories;
	const features = data.features;
	return (
		<>
			{sections.map((section, index) => (
				<>
					{section.role.includes("home") && section.role.includes("hero") && (
						<Section
							key={index}
							hero={true}
							headingSize={`h1`}
							description={section.description}
							imagePath={section.path}
							title={section.title}
							imageWidth={section.width}
							imageHeight={section.height}
							inverse={true}
							imagePosition={"right"}
							buttonText={"get an invite"}
						/>
					)}

					{section.role.includes("home") && !section.role.includes("hero") && (
						<Section
							key={index}
							headingSize={`h2`}
							description={section.description}
							imagePath={section.path}
							title={section.title}
							buttonText={"view the stories"}
							imageWidth={section.width}
							imageHeight={section.height}
							imagePosition={index % 2 === 0 && "right"}
							linkHref="/stories"
						/>
					)}
				</>
			))}

			<section className={Styles["stories-section"]}>
				{stories.map(
					(story, index) =>
						story.role.includes("home") && (
							<StoriesCard
								key={index}
								date={story.date}
								title={story.title}
								author={story.author}
								path={story.path}
								width={story.width}
								height={story.height}
								role={story.role}
							/>
						)
				)}
			</section>

			<section className={Styles["section-features"]}>
				{features.map((feature, index) => (
					feature.role.includes("home") &&
					<Feature key={index} title={feature.title} description={feature.description} path={feature.path} />
				))}

			</section>

		</>
	);
}
