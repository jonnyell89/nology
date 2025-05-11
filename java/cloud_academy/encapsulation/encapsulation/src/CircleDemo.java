public class CircleDemo {
    public static void main(String[] args) {
        Circle myCircle = new Circle();
        Circle yourCircle = new Circle(7);

        printCircle(myCircle);
        System.out.println();
        printCircle(yourCircle);

    }
    public static void printCircle(Circle circle) {
        System.out.println("Circle radius: " + circle.getRadius());
        System.out.println("Circle circumference: " + circle.circumference());
        System.out.println("Circle area: " + circle.area());
    }
}
