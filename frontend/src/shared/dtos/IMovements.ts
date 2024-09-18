import { IAssisteds } from "./IAssisteds"


export interface IMovements {
    id:number
    name: string
    username: string
    email: string
    state: string
    city: string
    cep: string
    assisteds_list: Array<IAssisteds>
}

