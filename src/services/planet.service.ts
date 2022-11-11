import { Planet } from "../dto/planet"

const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bf7ec961e0msh2bfe61ab9094691p1bd748jsn791a6b315347',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
}

export async function getPlanets(): Promise<Planet[]> {
    const list: Planet[] = await fetch(`${url}/planet/list`, options)
        .then(response => response.json())
        .catch(err => console.error(err))
    return list.sort((a, b) => a.id - b.id)
}