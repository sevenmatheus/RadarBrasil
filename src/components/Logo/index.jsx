import myLogo from '../../../public/assets/images/logo-radar-brasil.png'; 

export default function Logo() 
{ 
    return ( 
        <div className='flex justify-center items-center py-10'>
            <a href="/" title="Radar do Brasil">
            <img src={myLogo.src} />
            </a>
        </div>
    ) 
}