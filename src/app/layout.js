import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import { GlobalContextProvider } from '../../state-management/ReactContext/GlobalContext'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Cana Life',
  description: 'Canada\'s best spot to buy shroms online!',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={poppins.className}>
          <GlobalContextProvider>
            <NavBar />
              <main>
                {children}
              </main>
            <Footer />
          </GlobalContextProvider>
        </body>
      </html>
  )
}
