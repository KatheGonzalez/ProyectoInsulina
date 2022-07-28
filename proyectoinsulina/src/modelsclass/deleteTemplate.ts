
export class deleteOrder {
    dni : string|number;
    state: string;
    constructor(dni=0, state=''){
        this.dni = dni;
        this.state = state
    }
}