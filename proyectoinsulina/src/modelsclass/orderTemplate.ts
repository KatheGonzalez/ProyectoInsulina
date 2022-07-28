
export class Order {
      id: string | number;
      dni: number;
      cellphone: number;
      full_name: string;
      place: string | number;
      date_requested: string;  // revisarlo
      private readonly state: string;
      count: number;
      brand: null

    constructor(id = 0, dni = 0, cellphone = 0, full_name = '', place='', date_requested = '', state ='', count=0, brand=null){
        
        this.id = id;
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