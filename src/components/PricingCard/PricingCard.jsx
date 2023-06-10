import React from 'react';
import Button from '../Button/Button';
import Styles from "./PricingCard.module.scss"

const PricingCard = ({
    plan,
    description,
    monthly,
    yearly,
    type
}) => {
  return (
    <div className={`${Styles["card"]} ${plan === "Pro" && Styles['inverse']}`}>
        <div>
          <p className={Styles.plan}>{plan}</p>
          <p>{description}</p>
        </div>
        <div>
          <p className={Styles.price}>${type === "monthly" ? monthly : yearly}</p>
          <p className={Styles["price-tag"]}>per {type === "monthly" ? "month" : "year"}{}</p>
        </div>
       <Button type={plan === "Pro" ? "inverse" : null}>Pick Plan</Button>
    </div>
  )
}

export default PricingCard