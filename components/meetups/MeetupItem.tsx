import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import Card from '../UI/Card';
import styles from './MeetupItem.module.scss';

type Props = {
    id: string,
    image: string,
    title: string,
    adress: string
}

const MeetupItem: FC<Props> = ({id, image, title, adress}) => {

    const router = useRouter();

    const navigateToDetails = () => {
        router.push(`/${id}`)
    }

    return (
        <li className={styles.item}>
            <Card className={styles.card}>
                <div className={styles.image}>
                    <Image src={image} alt='' layout="fill" objectFit="contain" priority={true}/>
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{adress}</address>
                </div>
                <div className={styles.actions}>
                    <button onClick={navigateToDetails}>Show details</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem