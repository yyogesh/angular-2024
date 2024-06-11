import { IAddress } from "./address.inteface";
import { ICompany } from "./company.interface";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}


// class User {
//     public int id {get; set;}
//     public string name {get; set;}
//     public string username {get; set;}
//     public string email {get; set;}
//     public IAddress address {get; set;}
//     public string phone {get; set;}
//     public string website {get; set;}
//     public ICompany company {get; set;}
// }