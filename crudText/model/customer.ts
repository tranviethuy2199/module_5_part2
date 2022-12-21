import {CustomerType} from "./customerType";

export interface Customer {
  id?: number;
  customerName?: string;
  customerBirthday?: string;
  customerGender?: number;
  customerIdCard?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerAddress?: string;
  customerType?: CustomerType;
}
