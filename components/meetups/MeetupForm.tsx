import React, { FC, FormEvent, useRef } from 'react'
import styles from './MeetupForm.module.scss';
import { MeetupInterface } from '../../pages';
import Card from '../UI/Card';
import { useRouter } from 'next/router';

type Props = {
    onAddMeetup: (newMeetup: MeetupInterface) => void
}

const MeetupForm: FC<Props> = ({onAddMeetup}) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newMeetup: any = {
            title: titleRef.current!.value,
            image: imageRef.current!.value,
            address: addressRef.current!.value,
            description: descriptionRef.current!.value,
            // id: new Date().toISOString()
        }

        onAddMeetup(newMeetup);   
        (e.target as HTMLFormElement).reset(); 
        router.push('/');  
    }

    return (
        <Card className={styles['form-container']}>
            <form onSubmit={submitHandler} autoComplete='off'>
                <div className={styles['form-control']}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id='title' ref={titleRef}/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id='image' ref={imageRef}/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="adress">Adress: </label>
                    <input type="text" id='adress' ref={addressRef}/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="description">Description: </label>
                    <textarea rows={5} id='description' required ref={descriptionRef}/>
                </div>
                <button type='submit'>Add meetup</button>
            </form>
        </Card>
    )
}

export default MeetupForm