
export class UpdateOrder {
    id: string | number;
    count: number;
    state: string;
    brand: string;
    date_collected: string;

    constructor(id = 0, count = 0, state = '' ,brand = '', date_collected = ''){
        this.id = id;
        this.count = count;
        this.state = state;
        this.brand = brand;
        this.date_collected = date_collected
    }
}