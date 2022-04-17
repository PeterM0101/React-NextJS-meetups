import React from 'react'
import styles from './MainNavigator.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router'; 

type Props = {}

const MainNavigator = (props: Props) => {

  const router = useRouter();
  return (
    <header className={styles.header}>
        <div className={styles.logo}>React meetups</div>
        <nav>
            <ul>
                <li className={styles[router.asPath == "/" ? "active" : ""]}>
                  <Link href={'/'}>All Meetups</Link>
                </li>
                <li className={styles[router.asPath == "/new-meetup" ? "active" : ""]}>
                  <Link href={'/new-meetup'}>Add new meetup</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigator