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

export async function getStaticPaths(){
  return{
    fallback: false,
    paths:[
      {
        params: {
          slug: 'm1',
        },
      },
      {
        params: {
          slug: 'm2',
        }
      }
    ]
  }
}

export async function getStaticProps(context){

  const slug = context.params.slug;

  console.log(slug)

  return{
    props: {
      meetupData: {
        image: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        id: slug,
        title: 'first meetup',
        address: 'address',
        description: 'First'
      }
    }
  }
}

export default MeetupDet;