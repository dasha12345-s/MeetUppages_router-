import { MongoClient, ObjectId } from 'mongodb';

import MeetupDEteil from '../components/meetups/MeetupDetail'
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDet(props){

  return(
    <Fragment>
      <Head>
        <title>{props.meetupData.title} page</title>
        <meta name='description' content={props.meetupData.description}/>
      </Head>
      <MeetupDEteil 
    image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}/>
    </Fragment>
  )
}

export async function getStaticPaths(){

  const client = await MongoClient.connect('mongodb+srv://shostak19:This-199606@cluster0.ithzofj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollections = db.collection('MeetUPs');

  const meetups = await meetupsCollections.find({}, {
    _id: 1
  }).toArray();

  client.close();

  return{
    fallback: 'blocking',
    paths: meetups.map(meetup => (
      {
        params: {
          slug: meetup._id.toString()
        }
      }
    )) }
}

export async function getStaticProps(context){

  const slug = context.params.slug;

  const client = await MongoClient.connect('mongodb+srv://shostak19:This-199606@cluster0.ithzofj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollection = db.collection('MeetUPs');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(slug)
  });
  client.close();
  

  return{
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
      }
    }
  }
export default MeetupDet;