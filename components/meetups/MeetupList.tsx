import React, { FC } from 'react'
import styles from './MeetupList.module.scss';
import MeetupItem from './MeetupItem';
import { MeetupInterface } from '../../pages';

type Props = {
    meetups: MeetupInterface[]
}

const MeetupList: FC<Props> = ({meetups}) => {
  console.log('meetups MeetupList: ', meetups);
  
  return (
    <ul className={styles.list}>
        {meetups && meetups.map(meetup => (
            <MeetupItem 
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                adress={meetup.address}
            />
        ))}
    </ul>
  )
}

export default MeetupList