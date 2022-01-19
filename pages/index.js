import { useEffect } from "react";
import { useState } from "react";

import myAPI from "../src/modules/myAPI";
import Layout from "../src/components/Layout";
import ListDeputies from "../src/components/ListDeputies";
import Logo from "../src/components/Logo";
import Warning from "../src/components/Warning";


export default function Home() 
{ 
    const [maxDeputies, setMaxDeputies] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)
    const [deputies, setDeputies] = useState([])

    useEffect(function() { 
        
        myAPI('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome').then(function(response) { 
            setDeputies(response.dados)
        })

    }, [])
 

    return ( 
        <Layout title='Radar do Brasil - Uma ferramenta para a democracia!'>
            <Warning text={<p>Aplicação desenvolvida usando <strong>Next & React </strong></p>} />
            <Logo />
            <ListDeputies deputiesList={deputies} maxItems={maxDeputies} currentPage={currentPage} setCurrentPage={setCurrentPage} setMaxDeputies={setMaxDeputies} />
        </Layout>
    )     
}