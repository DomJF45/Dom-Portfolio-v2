import Chakra from './components/Chakra';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <link rel="icon" type="image/svg+xml" href="/blackmage.png" />
      <body style={{overflowX: 'hidden', position: 'relative'}}>
        <Chakra>
          {children}
        </Chakra>
      </body>
    </html>
  )
}
