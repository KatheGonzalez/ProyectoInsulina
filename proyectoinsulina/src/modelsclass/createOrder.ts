
export class CreateOrder {
      id?: string;
      dni?: string;
      cellphone?: number;
      full_name?: string;
      place?: string;
      date_requested?: string;
      state?: string;
      count?: number;
      brand?: string
      date_collected? = null

    constructor(id='', dni='', cellphone=0, full_name='', place='', date_requested='', state:'', count:0, brand='', date_collected=null){
        this.id = id
        this.dni = dni;
        this.cellphone = cellphone; 
        this.full_name = full_name; 
        this.date_requested = date_requested;
        this.place = place;
        this.state = state;
        this.count =  count;
        this.brand = brand;
        this.date_collected  = date_collected
    }
}