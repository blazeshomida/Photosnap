import React from "react";
import data from "@/data/data.json";
import Styles from './PricingTable.module.scss'

const PricingTable = () => {
	const comparisons = data.comparison;
	const headers = Object.keys(comparisons[0]);

	return (
		<table className={Styles['pricing-table']}>
			<caption className="visually-hidden">Price Comparison</caption>
			<thead>
				<tr>
					<th>The Features</th>
					<th>Basic</th>
					<th>Pro</th>
					<th>Business</th>
				</tr>
			</thead>
            <tbody>
                {comparisons.map((comparison, index) => (
                    <tr key={index}>
                        <td data-label={'feature'} className={Styles["table-feature"]}>{comparison.feature}</td>
                        <td  data-label={'basic'} className={Styles["table-data"]}>{comparison.basic ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg> : ' '}</td>
                        <td data-label={'pro'} className={Styles["table-data"]}>{comparison.pro ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg> : ' '}</td>
                        <td  data-label={'business'} className={Styles["table-data"]}>{comparison.business ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 8.124L5.623 13 17 1"/></svg> : ' '}</td>
                    </tr>
                ))}
            </tbody>
		</table>
	);
};

export default PricingTable;
