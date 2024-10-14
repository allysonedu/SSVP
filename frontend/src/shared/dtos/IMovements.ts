import { IAssisteds } from "./IAssisteds"
import { IConferences } from "./IConferences"


export interface IMovements {
    id: number
    user_id: number,
    movement_date: string,
    assisted_id: Array<IAssisteds>
    conference_id: Array<IConferences>
    movement_items: Array<IDonationsItems>,
}

export interface IDonationsItems {
    id?: number 
    name: string
    quantity: number
    movement_id: number
}