import styles from './MeetupDetails.module.scss'
import React, { FC } from 'react'
import Image from 'next/image'

type Props = {
  image: string, 
  title: string, 
  description: string, 
  address: string,
  id: string
}

const MeetupDetails: FC<Props> = ({image, title, description, address, id}) => {
  
  return (
    <div className={styles['meetup-details']}>
      <div className={styles.image}>
        <Image src={image} alt={title} layout="fill" objectFit="contain" priority={true}/>
      </div>
      <h3>{title}</h3>
      <address>{address}</address>
      <p>{description}</p>
    </div>
  )
}

export default MeetupDetails