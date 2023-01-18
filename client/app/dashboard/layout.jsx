import Head from "next/head";
import "app/globals.css";
import { Sidebar } from "app/dashboard/Sidebar.jsx";
//import styles from "app/page.module.css";
export default function dashboardLayout({ children }) {
  return (
    <div >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
    
      </Head>
      <div className="bg-gray-200 min-h-screen ">
        <div className="flex min-h-screen ">
        <Sidebar />
        {children}
        </div>
        </div>
    </div>
  );
}
