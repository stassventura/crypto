import Header from "@/components/Header"
import './styles/globals.scss'
import './styles/auth.scss'
import './styles/adminPanel.scss'
import Head from 'next/head';
import Footer from "@/components/Footer";
import Providers from "@/redux/Provider";
import SessionHandler from "@/components/SessionHandler";
import LoadingPage from "@/components/LoadingPage";


export const metadata = {
  title: 'BITLIST',
  description: 'Crypto exchange №1',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
       <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
          <Providers>
            <LoadingPage/>
            <SessionHandler/>
            <Header/>
              {children}
            <Footer/>
          </Providers>
      </body>
    </html>
  )
}
