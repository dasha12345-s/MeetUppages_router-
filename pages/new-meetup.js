import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeet(){

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
  }
  return(
      <NewMeetupForm onAddMeetup={addMeetup} />
  )
}

export default NewMeet;