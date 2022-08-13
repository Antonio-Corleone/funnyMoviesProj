import { connectDatabase, storeCollection } from '../../../lib/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { movie, title, author } = req.body;
    // Check input value
    if (
      !movie ||
      !movie.trim() === '' ||
      !title ||
      !title.trim() === ''
    ) {
      res.status(422).json({ content: { error: 'Invalid input!!!' } })
      return;
    };
    const newMovie = {
      id: Math.random(),
      movie,
      title,
      author
    }
    // connect to db
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ content: { error: "Can't connect to database" } });
      return;
    }
    // insert new movie to db
    try {
      await storeCollection(client, 'movies', newMovie);
    } catch (error) {
      res.status(500).json({ message: error.message || 'Some thing went wrong' })
      client.close();
      return
    }
    client.close();
    res.status(201).json({ content: { message: 'Successfully add new movie' } })
  }
};

export default handler;