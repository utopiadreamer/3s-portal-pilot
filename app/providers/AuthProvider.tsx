'use client';

import { SessionProvider } from 'next-auth/react';
import { signIn, useSession } from 'next-auth/react';
import Unauthorized from '../pages/auth/unauthorized';

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Auth>{children}</Auth>
    </SessionProvider>
  );
};

function Auth({ children }) {
  const { status } = useSession();

  if (status === 'authenticated') {
    return children;
  }

  // return <Unauthorized />
  
  if (status !== 'loading') {
    signIn('identity-server');
  }

  return <>{children}</>;
}
