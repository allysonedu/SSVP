export interface IAssisteds {
    id:number,
    name: string,
    age: number,
    whatsapp: string,
    profession: string,
    district: string,
    cpf: string,
    Case_report: string,
    family_income: string,
    explain: string,
    Spouse: string,
    maritalStatus: string,
    home: string,
    dependents: Array<IDependents>
}


interface IDependents {
    id: Number,
    assisted_id: Number,
    age: Number,
    name: string,
    relationship: string
    
}