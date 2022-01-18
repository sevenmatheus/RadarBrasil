export default async function myAPI(apiURL) 
{ 

    try 
    {

        const request = await fetch(apiURL)
        const convert = await request.json()

        return convert
        
        
    } catch(error) { 

        console.error(error)
    
    }
}