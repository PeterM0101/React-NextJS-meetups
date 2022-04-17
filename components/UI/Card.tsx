import React, { FC, ReactNode } from 'react'
import styles from './Card.module.scss';

interface CardProps {
  className?: string,
  children: ReactNode
}

const Card: FC<CardProps> = ({children, className}) => {
  return (
    <div className={`${styles.card} ${className}`}>
        {children}
    </div>
  )
}

export default Card