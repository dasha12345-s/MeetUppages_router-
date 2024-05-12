import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeet(){

  function addMeetup(enteredMeetupData){
    console.log(enteredMeetupData)
  }
  return(
    <NewMeetupForm onAddMeetup={addMeetup} />
  )
}

export default NewMeet;