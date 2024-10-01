import { IAssisteds } from "./IAssisteds"
import { IConferences } from "./IConferences"


export interface IMovements {
    id: number
    deliveredBy: "",
    movement_date: Date,
    assisted_id: Array<IAssisteds>
    conference_id: Array<IConferences>
    products: Array<string>,
}

