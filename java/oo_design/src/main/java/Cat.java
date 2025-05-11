public class Cat extends Animal{

    public Cat(String name, String breed) {
        super(name, breed);
    }

    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}
