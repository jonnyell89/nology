public class ThrowableMethods {

    public static double divide(double x, double y) {

        if (y == 0) {
            throw new ArithmeticException("ArithmeticException occurred");
        }

        return x / y;

    }

    public static void main(String[] args) {

        double d;

        try {

            d = divide(5.6, 0);

        } catch (ArithmeticException e) {

            // System.out.println("Divider cannot be equal to zero");

            // Returns null if no message is assigned to 'throw new ArithmeticException();'
            System.out.println(e.getMessage());

            // Returns a short description of the Throwable class.
            System.out.println(e.toString());

            // Predefined with void, so called directly.
            e.printStackTrace();

            // Prints the error message.
            // System.out.println(e.getLocalizedMessage());

        }

    }

}
