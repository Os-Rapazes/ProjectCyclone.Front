import { Client } from "./client.model"
import { Color } from "./color.model"

export interface Car{
    carId: string 
    plate: string
    colorId: number
    color: Color
    model: string
    brand: string
    price: number
    clientId : string
    client : Client
}

export interface CarRegister{ 
    plate: string
    colorId: number
    color: Color
    model: string
    brand: string
    price: number
    clientId : string
}