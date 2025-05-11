abstract class Vehicle {
  constructor(
    private _make: string,
    private _model: string,
    protected _speed: number = 0
  ) {}

  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }

  abstract get speed();

  abstract set speed(delta: number);
}

class RoadVehicle extends Vehicle {
  constructor(_make: string, _model: string, private _wheels: number = 4) {
    super(_make, _model);
  }

  get wheels() {
    return this._wheels;
  }

  get speed() {
    return this._speed;
  }

  set speed(delta: number) {
    if (this._speed + delta > 0) {
      this._speed = this._speed + delta;
    } else {
      this._speed = 0;
    }
  }
}

interface HasPassengers {
  readonly passengerSeats: number;
  makeStop(numberOn: number, numberOff: number): void;
}

class SingleDeckerBus extends RoadVehicle implements HasPassengers {
  constructor(
    _make: string,
    _model: string,
    _wheels: number,
    readonly passengerSeats: number,
    private _passengersOnBoard: number = 0
  ) {
    super(_make, _model, _wheels);
  }

  get passengersOnBoard() {
    return this._passengersOnBoard;
  }

  public makeStop(numberOn: number, numberOff: number): void {
    if (this._passengersOnBoard + (numberOn - numberOff) >= 0) {
      this._passengersOnBoard += numberOn - numberOff;
    } else {
      this._passengersOnBoard = 0;
    }
  }
}

let mySingleDeckerBus = new SingleDeckerBus("Volkswagen", "Polo", 10, 52, 30);
console.log(mySingleDeckerBus);
console.log(mySingleDeckerBus.make);
console.log(mySingleDeckerBus.model);
console.log(mySingleDeckerBus.passengerSeats);
console.log(mySingleDeckerBus.passengersOnBoard);

class Train extends Vehicle implements HasPassengers {
  constructor(
    _make: string,
    _model: string,
    readonly passengerSeats = 622,
    private _passengersOnBoard = 0
  ) {
    super(_make, _model);
  }

  get passengersOnBoard() {
    return this._passengersOnBoard;
  }

  get speed() {
    return this._speed;
  }

  set speed(delta: number) {
    if (this._speed + delta > 0) {
      this._speed = this._speed + delta;
    } else {
      this._speed = 0;
    }
  }

  public makeStop(numberOn: number, numberOff: number): void {
    if (this._passengersOnBoard + (numberOn - numberOff) >= 0) {
      if (
        this._passengersOnBoard + (numberOn - numberOff) <=
        this.passengerSeats
      ) {
        this._passengersOnBoard += numberOn - numberOff;
      } else {
        this._passengersOnBoard = this.passengerSeats;
      }
    } else {
      this._passengersOnBoard = 0;
    }
  }
}

let myTrain = new Train("Volkswagen", "Polo", 520, 300);
console.log(myTrain);
console.log(myTrain.make);
console.log(myTrain.model);
console.log(myTrain.speed);
console.log(myTrain.passengerSeats);
console.log(myTrain.passengersOnBoard);

mySingleDeckerBus.makeStop(20, 10);
console.log(mySingleDeckerBus.passengersOnBoard);

myTrain.makeStop(200, 100);
console.log(myTrain.passengersOnBoard);
