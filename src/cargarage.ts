$(readyNow);

function readyNow () {
    console.log('document ready');
}

interface Owner {
    firstName: string;
    lastName: string;
    location: string;
}

interface Car {
    make: string;
    model: string;
    year: number;
    condition: string;
    transmission?: string;
    owner: Owner;
}

class CarForSale {
    make: string;
    model: string;
    year: number;
    condition: string;
    transmission?: string;
    owner: Owner;

    constructor(make: string, model: string, year: number, condition: string, transmission: string, owner: Owner){
        this.make = make;
        this.model = model;
        this.year = year;
        this.condition = condition;
        this.transmission = transmission;
        this.owner = owner;
    }
}

let carsForSale: Car[] = [];
