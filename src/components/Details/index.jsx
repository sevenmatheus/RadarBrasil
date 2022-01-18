import { useRouter } from "next/router"

export default function Details({deputy}) 
{ 
    
    const router = useRouter()

    const unidadeFederativa =
    { 
        'AC' : 'Acre', 
        'AL' : 'Alagoas',
        'AP' : 'Amapá',
        'AM' : 'Amazonas',
        'BA' : 'Bahia',
        'CE' : 'Ceará', 
        'DF' : 'Distrito Federal',
        'ES' : 'Espirito Santo',
        'GO' : 'Goiás',
        'MA' : 'Maranhão',
        'MT' : 'Mato Grosso',
        'MS' : 'Mato Grosso do Sul',
        'MG' : 'Minas Gerais',
        'PA' : 'Pará',
        'PB' : 'Paraíba',
        'PR' : 'Paraná',
        'PE' : 'Pernambuco',
        'PI' : 'Piauí',
        'RJ' : 'Rio de Janeiro',
        'RN' : 'Rio Grande do Norte',
        'RS' : 'Rio Grande do Sul',
        'RO' : 'Rondônia',
        'RR' : 'Roraima',
        'SC' : 'Santa Catarina',
        'SP' : 'São Paulo',
        'SE' : 'Sergipe',
        'TO' : 'Tocantins'

     }

     const nascimento = function() 
     { 
        let nascimento = deputy?.dataNascimento?.split('-'); 
        nascimento = nascimento?.reverse() 

        return nascimento?.join('/')
     }

     console.log(nascimento())

    return ( 
        <section className="flex items-center justify-center flex-col"> 
            <div className="container mx-auto bg-white rounded-2xl overflow-hidden"> 
                <div className="py-4 bg-emerald-500 text-center text-emerald-100">
                    <h1 className="font-semibold text-2xl">
                        {
                            `${deputy.nomeCivil} (${deputy.ultimoStatus?.siglaPartido}) `
                        }    
                    </h1> 
                    <p>
                        {unidadeFederativa[deputy.ultimoStatus?.siglaUf]} 
                    </p> 
                </div>
                <div className="flex items-center">
                    <div className="min-h-[320px] aspect-[12/6] relative">
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-l from-white z-10"></div>
                        <div className="absolute left-0 top-0 w-full h-full grayscale bg-left-top bg-no-repeat bg-cover opacity-50 z-0" style={{backgroundImage: `url('https://www.camara.leg.br/internet/deputado/bandep/pagina_do_deputado/${deputy.id}.jpg')`}}>
                        </div>
                    </div>
                    <div className="px-6 py-6 text-gray-500"> 
                        <div className="py-2">
                            <h2 className="font-semibold text-emerald-500 text-lg">Pessoal</h2>
                            <div className="flex items-center py-1">
                                <strong className="mr-1">Data de Nascimento:</strong>
                                {
                                    nascimento()
                                } 
                            </div>
                            <div className="flex items-center py-1">
                                <strong className="mr-1">Naturalidade:</strong>

                                { 
                                    `
                                        ${deputy.municipioNascimento}, ${unidadeFederativa[deputy.ufNascimento]}  
                                    `
                                }
                            </div>
                            <div className="flex items-center py-1">
                                <strong className="mr-1">Escolaridade:</strong>

                                { 
                                   deputy.escolaridade
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="py-2">
                            <h2 className="font-semibold text-emerald-500 text-lg">Contatos</h2>
                            <div className="flex items-center py-1">
                                <div className="px-2">
                                    <span className="iconify" data-icon="ci:mail"></span>
                                </div>                               
                                {deputy.ultimoStatus?.email} 
                            </div>
                            <div className="flex items-center py-1">
                                <div className="px-2">
                                    <span className="iconify" data-icon="ci:phone"></span>
                                </div>                               
                                {`(61)${deputy.ultimoStatus?.gabinete.telefone}`} 
                            </div>
                            
                        </div> 
                    </div> 
                </div> 
            </div>
            <div className="mt-6"> 
                <button className="py-2 px-4 font-semibold text-emerald-500 flex" onClick={() => router.push('/')}>
                    <div className="px-2">
                        <span className="iconify" data-icon="akar-icons:arrow-back"></span>
                    </div> 
                    Retonar 
                </button>
            </div>
        </section>
    )
}