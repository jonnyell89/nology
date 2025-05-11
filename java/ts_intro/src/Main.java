import java.util.Arrays;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.printf("Hello and welcome!");

        for (int i = 1; i <= 5; i++) {
            //TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
            // for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.
            System.out.println("i = " + i);
        }
        // Primitive data types:

        // boolean
        // const myBool: boolean = true;
        boolean myBool = true;
        System.out.println(myBool);
        myBool = false;
        System.out.println(myBool);

        // char
        // Use single quotes for char, use double quotes for string.
        char myChar = 'a';

        // Whole Numbers

        // JavaScript has number
        // Java has byte, short, int, long, float and double.
        // This is because Java allocates memory very precisely.

        // Maximum Values

        // byte stores whole numbers from -128 to 127
        // 1 byte = 8 bits
        byte myByte = 127;

        // 2 bytes
        // short stores whole numbers from -32,768 to 32,767
        short myShort = 32767;

        // 4 bytes
        // int stores whole numbers from -2,147,483,648 to 2,147,483,647
        int myInt = 2_147_483_647;

        // 8 bytes
        // Use 'L' suffix for longs.
        // long stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        long myLong = 9_223_372_036_854_775_807L;

        // Decimal Numbers

        // 4 bytes
        // Use 'f' suffix for floats.
        // float stores fractional numbers. Sufficient for storing 6 to 7 decimal digits.
        float myFloat = 9.1234567f;

        // 8 bytes
        // double stores fractional numbers. Sufficient for storing 15 to 16 decimal digits.
        double myDouble = 9.123456789101112;

        // Casting: byte -> short -> int -> long -> float or double
        // When defining a variable, always use the upper-limit.

        // To cast to a specific data type:
        // short sumOne = myByte + myShort;
        short sumTwo = (short) (myByte + myShort);
        System.out.println(sumTwo);
        int sumThree = myShort + myShort;
        float sumFour = myLong;
        System.out.println(sumFour);

        // Non-primitive data types:

        // Strings: String has a capital letter because it is an Object.
        // Remember strings require double quotes "", while chars require single quotes ''.
        String myStringOne = "This is a string";
        System.out.println(myStringOne);
        String myStringTwo = myStringOne + " in Java.";
        System.out.println((myStringTwo));

        System.out.println(myStringOne == myStringTwo);
        System.out.println(myStringOne.equals((myStringTwo)));

        System.out.println(myStringOne.length());

        String myStringThree = "This is a string";
        System.out.println(myStringOne.charAt(0));

        // Strings with the same value are the same Object stored in memory.
        System.out.println(System.identityHashCode(myStringOne));
        System.out.println(System.identityHashCode(myStringThree));

        // printf
        System.out.printf("This is a printf String: %s, and this is a printf byte: %d.", myStringOne, myByte);

        // Arrays
        int[] myArray = {1, 2, 3, 4, 5};
        // Prints the hash reference
        System.out.println(myArray);
        // Prints the myArray as a string
        System.out.println(Arrays.toString(myArray));
        System.out.println(myArray[0]);

        // Use the 'new' keyword to call the constructor
        byte[] byteArray = new byte[4];
        System.out.println(Arrays.toString(byteArray));

        // Fixed length arrays
        // ArrayIndexOutOfBoundsException
        // myArray[5] = 6;

        // Copy arrays of fixed length
        int[] myAges = {23, 27, 31, 37, 49};
        // copyOf(originalArray, newLength)
        myAges = Arrays.copyOf(myAges, 9);
        System.out.println(Arrays.toString(myAges));

        int[] myNumsOne = {6, 7, 8, 9, 10};
        int[] myNumsTwo = new int[myNumsOne.length * 2];
        System.out.println(myNumsTwo.length);

        // Loops

        for (int i = 0; i < myNumsOne.length; i++) {
            myNumsTwo[i] = myNumsOne[i];
        }
        System.out.println(Arrays.toString(myNumsTwo));
        myNumsTwo[9] = 999;
        System.out.println(Arrays.toString(myNumsTwo));

        int i = 0;
        while (i < myAges.length) {
            System.out.printf("Age: %d\n", myAges[i]);
            i++;
        }

        // Scanner Input
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Type any integer: ");
        int userInput = myScanner.nextInt();
        System.out.printf("User has typed integer: %d\n", userInput);

        // Conditionals
        char command = 'e';
        switch (command) {
            case 'c':
                System.out.println("Continue");
                break;
            case 'e':
                System.out.println("Exit");
                break;
            default:
                System.out.println("Command not recognised");
        }

        Dog snoopy = new Dog("Snoopy", 7, "WhiteAndBlack");
        System.out.println(snoopy);
        System.out.println(snoopy.name);
        System.out.println(snoopy.age);
        System.out.println(snoopy.colour);

        Dog lassie = new Dog("Lassie");
        System.out.println(lassie);
        System.out.println(lassie.name);
        lassie.setAge(9);
        System.out.println(lassie.getAge());
        System.out.println(lassie.age);
        System.out.println(lassie.colour);

        // Prints a hash reference
        // System.out.println(snoopy);
        // System.out.println(snoopy.name);
        // snoopy.name = "Snoopy";
        // System.out.println(snoopy.age);
        // snoopy.age = 7;
        // System.out.println(snoopy.age);
        // System.out.println(snoopy.getAge());

        System.out.println(snoopy.toString());
        snoopy.bark();
        System.out.println(snoopy.isHasTail());;

        Car myCar = new Car("Volkswagen", "Polo", (short) 2005);
        // System.out.println(myCar.maxSpeed);
        System.out.println(myCar.getWheels());
        Car newCar = new Car("Volkswagen", "Golf", (short) 2012, (short) 50, (short) 160, (short) 6);
        newCar.getSpeedInfo();
    }
}

// psvm
//public static void main(String[] args) {
//
//}
