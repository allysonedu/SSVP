export interface IUser {
  id?: number | null;
  name: string;
  email: string;
  whatsapp: string;
  password: string;
  username: string;
  position_id: number | null
  conference_id: number 
  mandateDate: Date | null
}
