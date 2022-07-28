
export class BaseTemplate {
    id: number|string;
    dni: number;
    cellphone: number;
    full_name: string;
    place: string;
    date_requested: string;
    state: string;
    count: number;
    brand: string;
    date_collected: string;

  constructor(id=0, dni=0, cellphone =0, full_name='', place = '', date_requested = '', state='',count=0, brand='', date_collected=''){
    this.id = id;
    this.dni = dni;
    this.cellphone = cellphone;
    this.full_name = full_name; 
    this.place = place; 
    this.date_requested = date_requested;
    this.state = state;
    this.count = count;
    this.brand = brand;
    this.date_collected = date_collected
  }
}