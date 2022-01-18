import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import Layout from "../src/components/Layout";
import myAPI from "../src/modules/myAPI";

import Logo from "../src/components/Logo";
import Details from "../src/components/Details";
import Warning from "../src/components/Warning";

export default function DetailsPage({query}) 
{ 

    const [deputy, setDeputy] = useState([])
    const router = useRouter()


    useEffect(function(){

        if(router.isReady) 
        { 
            myAPI(`https://dadosabertos.camara.leg.br/api/v2/deputados/${router.query.id}`).then(function(response) { 
            setDeputy(response.dados)
        })
        }       

    }, [router])


    return ( 
        <Layout title={`Radar do Brasil - ${deputy.nomeCivil}`}>
            <Warning text={<p>Aplicação desenvolvida usando <strong>Next & React </strong></p>} />
            <Logo />
            <Details deputy={deputy} />
        </Layout>
    )
}