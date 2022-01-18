import favicon from '../../../public/favicon.png'
import Script from "next/script"
import Head from "next/head";

export default function Layout({title, children}) 
{ 
    return ( 
        <div className='bg-gray-100 min-h-screen'>
            <Head>
                <title>{title}</title>
                <link rel="icon" href={favicon.src} />
            </Head>
            <main className='flex-1'> 
                {children}
            </main>

            <Script src="https://code.iconify.design/2/2.1.0/iconify.min.js" />
        </div>
    )
}