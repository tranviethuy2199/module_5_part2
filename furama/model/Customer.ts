import {CustomerType} from "./CustomerType";

export interface Customer{
 id: number;
 name : string;
 birthday: string;
 identityCard : string;
 phoneNumber:string;
 email:string;
 customerType : CustomerType;
 address:string;

}
