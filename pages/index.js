import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A Firest Meetup',
    image: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Some address 5, 34, 34213',
    description: 'This is a second  meetup'
  },
  {
    id: 'm12',
    title: 'A Meetup',
    image: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Some address 5, 34, 34213',
    description: 'This is a second  meetup'
  }
]

function HomePage(props){

  return(
      <MeetupList meetups={props.meetups}/>
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
  return{
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

export default HomePage;