const URL = 'https://cheeses-api.onrender.com'

export const cheesesLoader = async () => {

    const response = await fetch(URL + '/cheese')
    const cheeses = await response.json()
    console.log(cheeses)
    return cheeses
}