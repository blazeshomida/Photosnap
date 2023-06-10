import Image from 'next/image'
import Styles from './Feature.module.scss'

const Feature = ({path, title, description}) => {
  return (
    <div className={Styles['features-card']}>
        <Image
        className={Styles['card-icon']}
        src={path}
        alt={description}
        width={72}
        height={72}
        />
        <div className={Styles['card-details']}>
            <p className="heading-3">{title}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Feature