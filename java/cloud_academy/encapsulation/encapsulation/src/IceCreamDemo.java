public class IceCreamDemo {
    public static void main(String[] args) {
        IceCream myIceCream = new IceCream("Chocolate", 2, 1);
        IceCream yourIceCream = new IceCream("Vanilla", 3, 2);

        myIceCream.addTopping("Pistachio");

        yourIceCream.addTopping("Flake");

        printIceCream(myIceCream);
        System.out.println();
        printIceCream(yourIceCream);
    }

    public static void printIceCream(IceCream iceCream) {
        System.out.println("Ice Cream: " + iceCream.getName());
        System.out.println("Cost: " + iceCream.getCost());
        iceCream.printToppings();
    }
}
