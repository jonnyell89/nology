import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionHandling {
    public static void main(String[] args) {

        int number1 = 0, number2 = 0, result = 0;

        boolean isFlag = false;

        do {

            try {

                Scanner input = new Scanner(System.in);
                System.out.println("Please enter the first int number: ");
                number1 = input.nextInt();

                System.out.println("Please enter the second int number: ");
                number2 = input.nextInt();

                result = number1 / number2;
                System.out.println("Result: " + result);

                // If an exception occurs, isFlag remains false, and the while loop ensures the try block is executed again.
                // If the code executes without an exception, isFlag becomes true, and the while loop is terminated.
                isFlag = true;

                input.close();

            } catch (InputMismatchException e) {

                System.out.println("Please enter a valid number");

            } catch (ArithmeticException e) {

                System.out.println("The second nuber cannot be zero");

            } catch (Exception e) {

                System.out.println("An exception occurred");

            } finally {

                System.out.println("This statement is always executed.");

            }
        } while (!isFlag);
    }
}
