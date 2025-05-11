abstract class Vehicle {
  constructor(
    private make: string,
    private model: string,
    protected speed: number = 0
  ) {}

  get Make(): string {
    return this.make;
  }

  get Model(): string {
    return this.model;
  }

  abstract get Speed();

  abstract set Speed(delta: number);
}

// let myVehicle = new Vehicle("Volkswagen", "Polo");
// console.log(myVehicle)
// myVehicle.Speed = 70
// console.log(myVehicle.Make)
// console.log(myVehicle.Model)
// console.log(myVehicle.Speed)
// myVehicle.Speed = -20
// console.log(myVehicle.Speed)

class RoadVehicle extends Vehicle {
  constructor(
    make: string,
    model: string,
    speed: number = 0,
    private wheels: number = 4
  ) {
    super(make, model, speed);
  }

  get Wheels(): number {
    return this.wheels;
  }

  get Speed(): number {
    return this.speed;
  }

  set Speed(delta: number) {
    const newSpeed: number = this.speed + delta;
    if (newSpeed > 0) {
      this.speed = newSpeed;
    } else this.speed = 0;
  }
}

let myRoadVehicle = new RoadVehicle("Volkswagen", "Golf");

console.log(myRoadVehicle);
myRoadVehicle.Speed = 90;
console.log(myRoadVehicle.Make);
console.log(myRoadVehicle.Model);
console.log(myRoadVehicle.Speed);
console.log(myRoadVehicle.Wheels);
