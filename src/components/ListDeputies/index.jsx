import { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

export default function ListDeputies({deputiesList, maxItems, currentPage, setCurrentPage}) 
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

    }, [currentPage, deputiesList]) 



    return ( 
        <section>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"> 
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