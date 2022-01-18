import { useRouter } from "next/router"



export default function Card({politico}) 
{ 

    const router = useRouter()

    return ( 
        <div className=" rounded-3xl flex items-center px-4 py-6 bg-white/75"> 
            <div 
                className=" h-32 aspect-[3/4] rounded-3xl shadow-inner bg-no-repeat bg-center bg-cover relative" 
                style={{backgroundImage: `url('https://www.camara.leg.br/internet/deputado/bandep/${politico?.id}.jpg')`}}> 

                <div className="absolute -right-4 -top-4 aspect-square h-8 rounded-lg bg-emerald-500 flex justify-center items-center font-bold text-emerald-100 shadow-inner">
                    {politico?.siglaUf}
                </div> 
            </div>
            <div className="flex-1 pl-6 flex flex-col">
                <h3 className="font-regular">{politico?.nome}</h3>
                <a href="#" className="text-xs font-bold text-emerald-500">
                    {politico?.email}
                </a>
                <div>
                    <button className="my-2 font-bold text-amber-400 flex items-center" onClick={() => router.push(`/details?id=${politico?.id}`)}>
                        <div className="mr-1">
                            <span className="iconify" data-icon="carbon:view"></span>
                        </div> 
                        Visualizar
                    </button> 
                </div>
            </div> 
        </div>
    )
}