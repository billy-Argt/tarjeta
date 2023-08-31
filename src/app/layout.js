import '../styles/globals.css'

export const metadata = {
  title: 'Primera Asignación',
  description: 'Tarjeta de Credito',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
