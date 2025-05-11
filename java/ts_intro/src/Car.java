public class Car {

    // Abstraction: Interfaces, abstract classes, abstract methods.
    // Encapsulation: Private fields.
    // Polymorphism: Overloading, overriding.
    //

    // Instance variables belong to the instance of the Object.
    // Fields
    private String make;
    private String model;
    private int year;
    private int currentSpeed;
    private int maxSpeed;
    private int wheels = 4;

    // ALT + insert
    // Remember to select the properties you want.

    // Constructor
    public Car(String make, String model, short year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Constructor
    public Car(String make, String model, short year, short currentSpeed, short maxSpeed, short wheels) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        this.wheels = wheels;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public short getYear() {
        return (short) year;
    }

    public void setYear(short year) {
        this.year = year;
    }

    public int getCurrentSpeed() {
        return currentSpeed;
    }

    public void setCurrentSpeed(int currentSpeed) {
        this.currentSpeed = currentSpeed;
    }

    public short getMaxSpeed() {
        return (short) maxSpeed;
    }

    public void setMaxSpeed(short maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public int getWheels() {
        return wheels;
    }

    public void setWheels(int wheels) {
        this.wheels = wheels;
    }

    // Methods

    public void getSpeedInfo() {
        System.out.printf("Your current speed is %d mph", this.getCurrentSpeed());
    }
}
