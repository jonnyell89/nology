// Classes are blueprints to create objects to the same design.
// A copy of a class is called an instance of that class.
// Generally, classes are public because they are made to be accessed widely and repeatedly.

public class Dog {
    // Properties or fields
    public String name;
    public int age;
    public String colour;
    // Default property value
    private Boolean doesBark = true;
    private final boolean hasTail = true;

    // Define bespoke constructor

    // Method Overloading => Polymorphism => Multiple Shapes:

    // Default constructor
    Dog() {};

    Dog(String name) {
        this.name = name;
    }

    // this keyword is self
    // this refers to itself in the context of the Object
    Dog(String name, int age, String colour) {
        this.name = name;
        this.age = age;
        this.colour = colour;
    }

    // Define Getters and Setters

    // Shortcut for getters and setters: alt + insert
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        int dogYears = this.age * 7;
        return String.format("%s is %d years old in human years, and %d years old in dog years.", this.name, this.age, dogYears);
    }

    public void setAge(int age) {
        this.age = age;
    }

    // Define a final method:

    public boolean isHasTail() {
        return hasTail;
    }

    // Define a Dog method:

    public void bark() {
        System.out.println("ARF! ARF!!!");
        // Can access all properties of the Dog class
    }

    // Define a toString()

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", colour='" + colour + '\'' +
                ", doesBark=" + doesBark +
                '}';
    }
}
