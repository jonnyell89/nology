class Circle {
  constructor(public radius: number, public center: [number, number]) {}
}

abstract class Vehicle {
  constructor(public make: string, public model: string, public speed = 0) {}
}

interface RoadVehicle {
  wheels: number;
  taxed: boolean;
}

class Car extends Vehicle implements RoadVehicle {
  wheels: number;
  taxed: boolean;

  constructor(make: string, model: string, wheels: number, taxed: boolean) {
    super(make, model);
    this.wheels = wheels;
    this.taxed = taxed;
  }
}

class Bus extends Vehicle implements RoadVehicle {
  wheels: number;
  taxed: boolean;

  constructor(make: string, model: string, wheels: number, taxed: boolean) {
    super(make, model);
    this.wheels = wheels;
    this.taxed = taxed;
  }
}

class Plane extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }
}

class Garage<T> {
  garage: T[] = [];

  park(aThing: T) {
    this.garage.push(aThing);
    console.log(this.garage[0].speed);
  }
}

class VehicleGarage<T extends Vehicle> {
  vehicleGarage: T[] = [];

  park(vehicle: T) {
    this.vehicleGarage.push(vehicle);
    console.log(this.vehicleGarage[0].speed);
    console.log(this.vehicleGarage[0].taxed);
  }
}

class RoadVehicleGarage<T extends RoadVehicle> {
  roadVehicleGarage: T[] = [];

  park(roadVehicle: T) {
    this.roadVehicleGarage.push(roadVehicle);
    console.log(this.roadVehicleGarage[0].speed);
    console.log(this.roadVehicleGarage[0].taxed);
  }
}

let myCircle = new Circle(3, [7, 3]);
let myCar = new Car("Volkswagen", "Polo", 4, true);
let myBus = new Bus("Ford", "Fiesta", 10, true);
let myplane = new Plane("Boeing", "777");
let myGarage = new Garage();
let myVehicleGarage = new VehicleGarage();
let myRoadVehicleGarage = new RoadVehicleGarage();

myGarage.park(myCircle);
myGarage.park(myCar);
myGarage.park(myBus);
myGarage.park(myplane);

myVehicleGarage.park(myCircle);
myVehicleGarage.park(myCar);
myVehicleGarage.park(myBus);
myVehicleGarage.park(myplane);

myRoadVehicleGarage.park(myCircle);
myRoadVehicleGarage.park(myCar);
myRoadVehicleGarage.park(myBus);
myRoadVehicleGarage.park(myplane);

function logVehicleGarage<T extends Vehicle>(anyVehicleGarage: T[]): void {
  console.log(anyVehicleGarage);
}

logVehicleGarage(myGarage.something);
logVehicleGarage(myVehicleGarage.vehicleGarage);
logVehicleGarage(myRoadVehicleGarage.roadVehicleGarage);
