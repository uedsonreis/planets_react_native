export interface Planet {

    id: number
    key: string
    name: string
    planetOrder: string
    description: string
    imgSrc: [{ img: string }]
    basicDetails: [{ mass: string, volume: string }]

}