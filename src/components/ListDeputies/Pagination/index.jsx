
export default function Pagination({currentPage, maxItems, resultSize, setCurrentPage}) 
{ 

    const numberPages = Math.floor(resultSize / maxItems)
    
    function setButton() 
    { 
        console.log(state) 

        
    }

    const button = 
    { 
        increment : function()
        { 
           setCurrentPage(currentPage + 1) 
        }, 
        decrement : function()
        {  
            setCurrentPage(currentPage - 1) 
        }, 
        setState : function(state, text, operation) 
        { 
            if(state === true) 
            { 
                return ( 
                    <button onClick={() => button[operation]()} className="py-2 px-4 rounded-lg text-gray-400 font-semibold bg-gray-300 cursor-no-drop" disabled>
                        {text}
                    </button>
                )
        
            }else{ 

                return ( 
                    <button onClick={() => button[operation]()} className="py-2 px-4 rounded-lg text-white font-semibold bg-emerald-500">
                        {text}
                    </button>
                )
            }
        }
    }


    return (
        <div className="my-4 py-4">
            <div className="container mx-auto flex justify-center"> 
                {   
                    button.setState((currentPage <= 0), 'Anterior', 'decrement')
                }
                <div className="flex items-center justify-center px-4 font-semibold text-gray-300">
                {/*Display*/}
                    <span className="text-emerald-500 px-2"> 
                        {
                            currentPage + 1
                        }
                    </span>
                    /
                    <span className="px-2"> 
                        {
                            numberPages + 1
                        }
                    </span>
                </div>
                {   
                    button.setState((currentPage >= numberPages), 'Próxima', 'increment')
                }
                
            </div> 
        </div>
    )
}