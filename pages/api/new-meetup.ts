// /api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req: Request, res: Response) => {
    if (req.method === 'POST') {
        const data: any = req.body;
        // if (data) {
        //     const { image, description, title, address } = data;
        //     console.log(image, description, title, address);
        // }
        const client = await MongoClient.connect('mongodb+srv://Petro:5pp9e5wd@cluster0.mackx.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        // res.status(201).json({message: 'Meetup inserted!'})
        
    }
}

export default handler;