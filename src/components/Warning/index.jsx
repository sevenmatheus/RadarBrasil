export default function Warning({text}) 
{ 
    return ( 
        <div className="py-4 bg-gradient-to-r from-emerald-400 to-emerald-700">
            <div className="container mx-auto flex justify-center text-emerald-100"> 
                {text} 
            </div> 
        </div> 
    )
}