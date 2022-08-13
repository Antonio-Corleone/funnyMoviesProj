import { MongoClient } from 'mongodb';

const connectionString = 'mongodb+srv://TuanVu:VUMINHTUAN371995@tuanvu.popfc.mongodb.net/my-funny-movie?retryWrites=true&w=majority';

export async function connectDatabase() {
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function storeCollection(client, collection, data) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(data);
  return result;
}

export async function checkUserExist(client, collection, data) {
  const db = client.db();
  const user = await db.collection(collection).findOne(data);
  if(user) {
    return user;
  }else{
    return false;
  }
}

export async function getMovieFromApi (client,collection){
  const db = client.db();
  const result = await db.collection(collection).find().toArray();
  return result;
}