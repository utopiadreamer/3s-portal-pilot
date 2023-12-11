'use client';
import React from 'react';
import SideNav from './sidenav';
import '../../app/ui/global.css';
import { inter } from '../ui/fonts';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../redux/store';

export default function Layout({ children }: { children: React.ReactNode }) {
  const reduxLanguage = useSelector(
    (state: IGlobalState) => state.reduxlanguage.language,
  );

  return (
    <html dir={reduxLanguage.isRtl ? 'rtl' : 'rtl'} lang={reduxLanguage.lang}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row">
          <div className="flex h-screen flex-col md:flex-row">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <main className="my-0 py-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
