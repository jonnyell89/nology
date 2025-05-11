public class RectangleDemo {
    public static void main(String[] args) {

        Rectangle rectangle1 = new Rectangle();
        Rectangle rectangle2 = new Rectangle(5, 10);

        System.out.println(Rectangle.getNumRectangles());

        // Declared but not yet initialised.
        Rectangle rectangle3;

        System.out.println("After rectangle3 declared: " + Rectangle.getNumRectangles());

        rectangle3 = new Rectangle(3, 4);

        System.out.println("After rectangle3 instantiated: " + Rectangle.getNumRectangles());
        System.out.println(rectangle1.area());
        System.out.println(rectangle2.area());
        System.out.println(rectangle3.area());

        System.out.println(rectangle1.perimeter());
        System.out.println(rectangle2.perimeter());
        System.out.println(rectangle3.perimeter());
    }
}
