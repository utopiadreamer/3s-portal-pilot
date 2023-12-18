import React from 'react';
import SideNav from './sidenav';
import '../../app/ui/global.css';
import { inter } from '../ui/fonts';
import Header from './header';
import { initializeIcons } from '@fluentui/react';

initializeIcons();
export default function Layout({ children }: { children: React.ReactNode }) {
  // const init = () => {
  //   if (isNullOrUndefined(reduxLanguage.lang)) {
  //       let lang = i18n.language;
  //       if (isNullOrUndefined(lang)) lang = LanguageUtil.GetStorageLang();
  //       dispatch(changeLanguage(lang));
  //   }
  // };

  // init();

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex h-screen flex-col md:flex-row">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <main className="my-0 py-16">
          <Header />
          <br />
          {children}
        </main>
      </div>
    </div>
  );
}
