import { MongoClient, ObjectId } from 'mongodb'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { MeetupInterface } from '..'
import MeetupDetails from '../../components/meetups/MeetupDetails'

type Props = {
  meetupData: MeetupInterface
}

const MeetupInfo: FC<Props> = ({meetupData: {image, description, title, address, id}}) => {
  const router = useRouter(); 

  return (
    <>
      <Head>
        <title>{`${title ? title : 'Meetup details'}`}</title>
        <meta 
          name='description'
          content={description}
        />
      </Head>
      <MeetupDetails
        image = {image}
        title = {title}
        description = {description}
        address = {address}
        id = {id}
      />
    </>
  )
}

export async function getStaticPaths() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const users = await res.json()

  // const paths = users.map((user) => ({
  //   params: { id: user.id.toString() },
  // }))
  const client = await MongoClient.connect('mongodb+srv://Petro:5pp9e5wd@cluster0.mackx.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups: any = await meetupsCollection.find({}).toArray();
  const paths = meetups.map((meetup: any) => (
    {
      params: {
        meetupId: meetup['_id'].toString()
      }
    }
  ))

  client.close();

  return (
    { 
      // paths: ['/m1', '/m2','/m3'], 
      paths,
      fallback: 'blocking' 
    }
  )
}

export const getStaticProps: GetStaticProps  = async (contex) => {

  const meetupId = contex?.params?.meetupId;

  const client = await MongoClient.connect('mongodb+srv://Petro:5pp9e5wd@cluster0.mackx.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetup: any = await meetupsCollection.findOne({_id: new ObjectId(meetupId as string)});
  
  client.close();
  const {title, address, image, description, _id} = meetup;
  
  // fetch data from API
  return {
    props: {
      meetupData: {
        title,
        image,
        description,
        address,
        id: _id.toString()
      }
    }
  }
} 

export default MeetupInfo