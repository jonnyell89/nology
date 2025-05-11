public class HouseDemo {
    public static void main(String[] args) {

        House myHouse = new House();
        House yourHouse = new House(2, 9, "brown");

        myHouse.setNumStories(3);
        myHouse.setNumWindows(11);
        myHouse.setColour("red");

//        yourHouse.setNumStories(2);
//        yourHouse.setNumWindows(9);
//        yourHouse.setColour("brown");

//        System.out.println("My house is " + myHouse.getColour() + " and has " + myHouse.getNumStories() + " stories with " + myHouse.getNumWindows() + " windows.");
//        System.out.println("Your house is " + yourHouse.getColour() + " and has " + yourHouse.getNumStories() + " stories with " + yourHouse.getNumWindows() + " windows.");

        printHouseData(myHouse);
        printHouseData(yourHouse);

    } // end main

    public static void printHouseData(House house) {
        System.out.println("The house is " +
                house.getColour() +
                " and has " +
                house.getNumStories() +
                " stories with " +
                house.getNumWindows() +
                " windows.");
    }

} // end HouseDemo
