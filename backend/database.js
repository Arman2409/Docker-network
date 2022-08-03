import mongoose from "mongoose";
import dotenv from 'dotenv';
import logger from './tools/logger.js';

dotenv.config();

const options = {
    
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    useNewUrlParser: true,
}; 

async function connect(){
  setTimeout(async () => {
    await mongoose.connect(process.env.ME_CONFIG_MONGODB_URL,options).then((res,err) => {
        if(res){
            logger.info(`Databe connected to ${process.env.ME_CONFIG_MONGODB_URL}`)
        }
        }).catch((err) => {
       logger.error(err)
       });
  }, 1000)
}

connect()

export default mongoose