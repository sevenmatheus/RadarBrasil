import { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

export default function ListDeputies({deputiesList, maxItems, currentPage, setCurrentPage, setMaxDeputies}) 
{ 

    function buildPage() 
    { 
        let deputiesPage = []

        for(let index = (currentPage * maxItems); deputiesPage.length < maxItems; index++)
        { 
            deputiesPage.push(deputiesList[index])
        }

        console.log(deputiesPage)
        return deputiesPage;

    }

    const [page, setPage] = useState([])

    useEffect(function() 
    { 
        setPage(buildPage())

    }, [currentPage, deputiesList, maxItems]) 

    const itemsPerPage = [6, 12, 18, 24]

    return ( 
        <section>

            <div className="container mx-auto flex gap-1 items-center justify-end py-6"> 

                <div className="mr-2 text-xs"> 
                    Items por Pagina:
                </div> 

            { 
                
                itemsPerPage.map(function(value, index) 
                { 
                    return ( 
                        <button className="p-2 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-lg aspect-square" key={index} onClick={() => setMaxDeputies(value)}> 
                            {value}
                        </button>
                    )
                })
            }
            </div>
            
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"> 
                {
                    page.map(function(person, index)
                    { 

                        if(String(typeof person) === 'undefined')
                        { 
                            return null
                            
                        }else { 
                            
                            return (
                                <Card key={index} politico={person} />                          
                            )
                            
                        }
                    })
                }
            </div>

            <Pagination currentPage={currentPage} maxItems={maxItems} resultSize={deputiesList.length} setCurrentPage={setCurrentPage} />
 
        </section>
    ) 
}