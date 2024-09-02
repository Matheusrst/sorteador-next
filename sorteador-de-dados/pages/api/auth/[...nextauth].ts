import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'instagram') {
        user.accessToken = account.accessToken;
      }
      return true;
    },
    async session(session, user) {
      session.accessToken = user.accessToken;
      return session;
    },
  },
});
