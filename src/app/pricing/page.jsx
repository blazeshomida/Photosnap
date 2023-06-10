'use client'

import React, { useState } from "react";
import data from "../../data/data.json";
import Section from "@/components/Section/Section";
import PricingCard from "@/components/PricingCard/PricingCard";
import Styles from "./page.module.scss";
import PricingTable from "@/components/PricingTable/PricingTable";

const Pricing = () => {
	const sections = data.sections;
	const plans = data.pricing;
	const [monthly, setMonthly] = useState(true)

	function togglePlan() {
		setMonthly((prev) => !prev);
		console.log(monthly);
	}

	return (
		<>
			{sections.map((section, index) => (
				<>
					{section.role.includes("pricing") && (
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
				</>
			))}
				<div className={Styles["toggle-label-wrapper"]}>
          <label htmlFor="plan-toggle" className={`${Styles["toggle-label"]} ${monthly && Styles['active']}`}>Monthly</label>
          <input 
		  id='plan-toggle'
		  type="checkbox" 
		  className={Styles.toggle}
		  onChange={togglePlan}
		  ></input>
          <label htmlFor="plan-toggle" className={`${Styles["toggle-label"]} ${!monthly && Styles['active']}`}>Yearly</label>
          </div>

			<section className={Styles['pricing-table']}>
				{plans.map((plan, index) => (
					<PricingCard
					key={index}
						plan={plan.plan}
						description={plan.description}
						monthly={plan.monthly}
						yearly={plan.yearly}
						type={monthly ? "monthly" : "yearly"}
					/>
				))}
			</section>

			<PricingTable />
		</>
	);
};

export default Pricing;
