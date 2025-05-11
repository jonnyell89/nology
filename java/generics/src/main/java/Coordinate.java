import java.io.Serializable;

// The class passed to the Coordinate class must be a subclass of the number class.
// Use & to pass a class with an interface or multiple interfaces.
// Remember that a subclass cannot inherit from more than one superclass.
public class Coordinate<T extends Number & Cloneable> {

    // Generic Type assigned to x and y.
    T x;
    T y;

    public Coordinate(T x, T y) {

        this.x = x;
        this.y = y;

    }

}
