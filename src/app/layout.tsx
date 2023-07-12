import './../styles/globals.scss'
import { Urbanist } from "next/font/google"
import Provider from './../components/Provider'
import Header from '../components/Header/Header'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Teste Auth 2</title>
            </head>
            <body className={urbanist.className}>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    )
}