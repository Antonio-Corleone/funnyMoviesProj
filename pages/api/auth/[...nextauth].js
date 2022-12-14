import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { connectDatabase } from '../../../lib/db-util';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        client.close();
        return { email: user.email };
        
      },
    }),
  ],
});