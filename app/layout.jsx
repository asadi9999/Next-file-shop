import Header from '@/components/header';
import Footer from '@/components/footer';
import '../styles/globals.css'
import {ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/React-Toastify.css'


export const metadata = {
   title: 'فروشگاه فایل کلیک',
   description: 'فروشگاه فایل کلیک',
}

export default function RootLayout({ children }) {
   return (
      <html lang="fa-IR">
         <body>
            <Header />
            {children}
            <Footer/>
         </body>
      </html>
   )
}
