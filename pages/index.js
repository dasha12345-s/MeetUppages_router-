import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props){

  return(
    <Fragment>
      <Head>
        <title>METADATA</title>
        <meta name='description' content="This project is so cool"/>
      </Head>
      <MeetupList meetups={props.meetups}/>
    </Fragment>
  )
}

// export async function getServerSideProps(context){

//   const req = context.req;
//   const res = context.res;

//   return(
//     {
//       props: {
//         meetups: DUMMY_MEETUPS
//       }
//     }
//   )
// }

export async function getStaticProps(){

  const client = await MongoClient.connect('mongodb+srv://shostak19:This-199606@cluster0.ithzofj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollections = db.collection('MeetUPs');

  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return{
    props: {
      meetups: meetups.map(meetup => (
        {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        }))
    },
    revalidate: 10
  }
}

export default HomePage;