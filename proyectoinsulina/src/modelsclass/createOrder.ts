import { ActiveStates } from "../const/states";

export class CreateOrder {
      id?: string;
      dni?: string;
      cellphone?: number;
      full_name?: string;
      place?: string;
      date_requested?: string;
      state?: ActiveStates;
      count?: number;
      brand?: string;
      date_collected?: string 

    constructor(id='', dni='', cellphone=0, full_name='', place='', date_requested= '', state:ActiveStates = 'CREATED', count:0, brand='', date_collected = ''){
        this.id = id
        this.dni = dni;
        this.cellphone = cellphone; 
        this.full_name = full_name; 
        this.date_requested = date_requested;
        this.place = place;
        this.state = state;
        this.count =  count;
        this.brand = brand;
        this.date_collected = date_requested;
        }
};
