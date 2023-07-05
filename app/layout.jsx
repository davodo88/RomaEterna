import Footer from '../components/footer'
import './globals.css'

export const metadata = {
  title: 'Roma Eterna',
  description: 'Roma Eterna Jordi Julia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full h-max bg-Red'>
        {children}
      </body>
      <Footer />
    </html>
  )
}
