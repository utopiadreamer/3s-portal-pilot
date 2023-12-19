import { Metadata } from 'next';
import Layout from './layout/layout';
import { AuthProvider } from './providers/AuthProvider';
import { ReduxProviders } from './providers/ReduxProvider';
import './global.scss'

export const metadata: Metadata = {
  title: '3S Portal Pilot',
  description: '3S Portal Pilot with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ReduxProviders>
            <Layout>{children}</Layout>
          </ReduxProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
