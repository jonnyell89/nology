public class ThrowException {

    public static double divide(double x, double y) {

        if (y == 0) {

            throw new ArithmeticException("Divider can not be equal to zero");

        }

        return x / y;

    }

    public static void main(String[] args) {

        try {

            double d;

            d = divide(8.5, 0);

            System.out.println("Result: " + d);

        } catch (ArithmeticException e) {

            System.out.println(e);

        }
    }
}
