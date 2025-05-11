public class House {
    // Fields, or instance fields.
    private int numStories;
    private int numWindows;
    private String colour;

    // No argument constructor
    public House() {
        numStories = 2;
        numWindows = 9;
        colour = "white";
    }

    // Parameterised constructor
    public House(int numStories, int numWindows, String colour) {
        this.numStories = numStories;
        this.numWindows = numWindows;
        this.colour = colour;
    }

    public int getNumStories() {
        return numStories;
    }

    public void setNumStories(int numStories) {
        this.numStories = numStories;
    }

    public int getNumWindows() {
        return numWindows;
    }

    public void setNumWindows(int numWindows) {
        this.numWindows = numWindows;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }
} // end House
