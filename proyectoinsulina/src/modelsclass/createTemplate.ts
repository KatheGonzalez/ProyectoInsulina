
export class CreateOrder {
      dni: string;
      cellphone: number;
      full_name: string;
      place: string;
      date_requested: string;
      readonly state: string;
      count: number;
      brand: string

    constructor(dni='', cellphone=0, full_name='', place='', date_requested='', state:'', count:0, brand=''){
    
        this.dni = dni;
        this.cellphone = cellphone; 
        this.full_name = full_name; 
        this.date_requested = date_requested;
        this.place = place;
        this.state = state;
        this.count =  count;
        this.brand = brand
    }
}