import React, { FC, ReactNode, useContext } from 'react'
import { IsLoadingContext } from '../store/isLoadingContext'
import Spinner from '../UI/Spinner'
import styles from './Layout.module.scss'
import MainNavigator from './MainNavigator'

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
  const {isLoading} = useContext(IsLoadingContext);
  return (
    <div className={styles.container}>
        {isLoading && <Spinner />}
        <MainNavigator />
        <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout