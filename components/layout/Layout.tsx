import React, { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import MainNavigator from './MainNavigator'

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
    <>
        <MainNavigator />
        <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout