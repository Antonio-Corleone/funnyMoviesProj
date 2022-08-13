import { connectDatabase, getMovieFromApi } from '../../../lib/db-util';

async function handler(req, res) {
  if (req.method === 'GET') {
    // connect to db
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ content: { error: "Can't connect to database" } });
      return;
    }
    // get movie from db
    try{
      const result = await getMovieFromApi(client, 'movies')
      res.status(200).json({ content: { data: result } });
    }catch (error) {
      res.status(500).json({ content: { error: "Something wrong" } });
      return;
    }
  }
};

export default handler;