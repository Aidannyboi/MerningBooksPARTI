import { connect } from 'mongoos';

import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function dbConnect() {
    try{
        await connect(MONGO_URI, {
            dbName: 'booksDB', 
        });

        console.log("Connected to database in MongoDB!")
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default dbConnect;