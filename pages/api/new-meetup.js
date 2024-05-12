import { MongoClient } from "mongodb";

async function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;

    const {title, image, address, description} = data;

    const client = await MongoClient.connect('mongodb+srv://shostak19:kMMXM6Oq0mny5GEW@cluster0.ithzofj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
  
    const meetupsCollections = db.collection('MeetUPs');
    const result = await meetupsCollections.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).jsonnn({message: 'Meetup inserted!'});
  }
}

export default handler;