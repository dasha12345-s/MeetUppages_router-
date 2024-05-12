import MeetupDEteil from '../components/meetups/MeetupDetail'

function MeetupDet(){

  return(
    <MeetupDEteil 
    image='https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    title='First MeetUP'
    address='Some Street 5, Some City'
    descriptio='The meetup description'/>
  )
}

export function getStaticProps(context){

  const meetupID = context.params;

  console.log(meetupID)

  return{
    props: {
      image: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      id: meetupID,
      title: 'first meetup',
      address: 'address',
      description: 'First'
    }
  }
}

export default MeetupDet;