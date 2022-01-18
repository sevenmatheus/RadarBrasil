import myLogo from '../../../public/assets/images/logo-radar-brasil.png'; 
import Image from 'next/image';
import Link from 'next/link'

export default function Logo() 
{ 
    return ( 
        <div className='flex justify-center items-center py-10'>
            <Link href="/">
                <div className='relative w-[297px] h-[64px]'> 
                    <Image src={myLogo.src} alt="Radar do Brasil" title='Radar do Brasil' width="100%" height="100%" layout="fill"/>
                </div>
            </Link>
        </div>
    ) 
}