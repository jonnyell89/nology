public class Dog extends Animal {

    public Dog(String name, String breed) {
        super(name, breed);
    }

    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}
