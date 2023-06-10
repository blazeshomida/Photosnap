import Styles from './StoriesCard.module.scss';
import Image from 'next/image';

const StoriesCard = ({
  date,
  title,
  author,
  path,
  width,
  height,
  role
}) => {
  return (
    <div className={Styles['card']}>
      <Image
      className={Styles['image']}
      src={path}
      width={width}
      height={height}
      alt={title}
      />
      <div className={Styles['content']}>
        <div className={Styles['details-wrapper']}>
          {!role.includes('home') && <p>{date}</p>}
          <p className={`heading-3 ${Styles['title']}`}>{title}</p>
          <p>{author}</p>
        </div>
        <div className={Styles['link-wrapper']}>
          <a href="/" className='heading-4'>READ STORY</a>
          <a href="/" className={Styles['arrow']} >
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default StoriesCard