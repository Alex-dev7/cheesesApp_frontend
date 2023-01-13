const URL = 'https://cheeses-api.onrender.com'

export const cheesesLoader = async () => {

    const response = await fetch(URL + '/cheese')
    const cheeses = await response.json()
    // console.log(cheeses)
    return cheeses
}

export const cheeseLoader = async ({params}) => {
    const response = await fetch(URL + '/cheese/' + params.id)
    const cheese = await response.json()
    // console.log(params)
    return cheese
}