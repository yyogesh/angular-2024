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