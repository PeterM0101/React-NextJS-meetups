import { MongoClient } from 'mongodb'
import type { NextPage } from 'next'
import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'
import styles from '../styles/Home.module.css'

export interface MeetupInterface {
  id: string,
  title: string,
  image: string,
  address: string,
  description: string  
}

// const DUMMY_MEETUPS: MeetupInterface[] = [
//   {
//     id: 'm1',
//     title: 'A first meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'some addres: 5 123',
//     description: 'This is the first meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'A second meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'some addres: 5 123',
//     description: 'This is the second meetup!'
//   },
//   {
//     id: 'm3',
//     title: 'A third meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'some addres: 5 123',
//     description: 'This is the third meetup!'
//   },
// ]

type Props = {
  meetups: MeetupInterface[]
}

const HomePage: NextPage<Props> = ({meetups}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React meetups</title>
        <meta 
          name='description'
          content='Briliant React meetups'/>
      </Head>
      <MeetupList meetups = {meetups}/>
    </div>
  )
}

export const getStaticProps = async () => {
  // send request and fetch data

  const client = await MongoClient.connect('mongodb+srv://Petro:5pp9e5wd@cluster0.mackx.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups: any = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup: any) => ({
        id: meetup._id.toString(), 
        title: meetup.title,
        image: meetup.image,
        address: meetup.address
      }))
    },
    revalidate: 1
  }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   // ...
//   return {
//     props: {
//       meetup: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage
