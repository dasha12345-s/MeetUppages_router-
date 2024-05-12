import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeet(){

  const router = useRouter();

 async function addMeetup(enteredMeetupData){
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
  })

    const data = await response.json()
    console.log(data);

    router.push('/')
    
  }
  return(
    <Fragment>
      <Head>
        <title>MeetUps</title>
        <meta 
          name="description"
          content="Create your oun meetups!"/>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </Fragment>
  )
}

export default NewMeet;