import React from 'react'
import data from "../../data/data.json";
import Section from "@/components/Section/Section";
import Styles from './page.module.scss';
import Feature from '@/components/Feature/Feature';


const Features = () => {
	const sections = data.sections;
	const features = data.features;


  return (
  <>  
 { sections.map((section, index) => (

<>

        {section.role.includes("features") && section.role.includes("hero") && 
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
        }
        </>

  ))}
  <section className={Styles["section-features"]}>
				{features.map((feature, index) => (
					<Feature key={index} title={feature.title} description={feature.description} path={feature.path} />
				))}

			</section>
      </>
)}

export default Features