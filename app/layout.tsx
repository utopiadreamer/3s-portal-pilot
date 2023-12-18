import Layout from './layout/layout';
import { AuthProvider } from './providers/AuthProvider';
import { ReduxProviders } from './providers/ReduxProvider';

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
