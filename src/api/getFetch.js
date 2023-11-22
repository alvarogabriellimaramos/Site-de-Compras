export const GetResponse = async query => {
    const data = (await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)).json()
    return data 
}