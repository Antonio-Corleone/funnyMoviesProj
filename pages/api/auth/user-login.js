import { connectDatabase, storeCollection, checkUserExist } from '../../../lib/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Check input value
    if (
      !email ||
      !email.includes('@') ||
      !password ||
      !password.trim() === ''
    ) {
      res.status(422).json({ content: { error: 'Invalid input!!!' } })
      return;
    };
    const newUser = {
      email,
      password
    }
    // connect to db
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ content: { error: "Can't connect to database" } });
      return;
    }
    // check user exist
    try {
      const isExist = await checkUserExist(client, 'users', { "email": newUser.email });
      if (isExist) {
        const password = await checkUserExist(client, 'users', { "email": newUser.email });
        if (password.password !== newUser.password) {
          res.status(401).json({ content: { error: "Incorrect password" } })
          return;
        }
      } else {
        // insert new user to db
        try {
          await storeCollection(client, 'users', newUser);
        } catch (error) {
          res.status(500).json({ content: { message: error.message || 'Some thing went wrong' } })
          client.close();
          return
        }
      }
    } catch (error) {
      res.status(500).json({ content:{message: error.message || 'Some thing went wrong'} })
      client.close();
      return
    }

    client.close();
    res.status(201).json({ content: { message: 'Successfully add new user', isLogin: true, name: newUser.email } })
  }
}

export default handler;