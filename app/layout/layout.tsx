'use client';
import React from 'react';
import SideNav from './sidenav';
import '../../app/ui/global.css';
import { inter } from '../ui/fonts';
import { i18n } from 'next-i18next';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html dir={i18n?.language.startsWith('ar') ? 'rtl' : 'rtl'} lang={i18n?.language}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row">
          <div className="flex-grow md:overflow-y-auto"></div>
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
