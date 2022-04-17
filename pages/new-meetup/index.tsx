// ourdomain.comm/new-meetup
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { MeetupInterface } from '..'
import MeetupForm from '../../components/meetups/MeetupForm';

const NewMeetupPage = () => {

  const router = useRouter();

  const addMeetupHandler = async (newMeetup: MeetupInterface) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(newMeetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = response.json();
    console.log('data: ', data);
    
    console.log('newMeetup: ',newMeetup);
    
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta 
          name='description'
          content='Add one more gorgeous meetup'
        />
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler}/>
    </>
  )
}

export default NewMeetupPage