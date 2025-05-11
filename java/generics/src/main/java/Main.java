import sun.font.CoreMetrics;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        // Supporting multiple types
        // Implementing generics in Java
        // Bounding generics in Java

        // ArrayList<E> -> array list takes an element, or type, defined in the definition.
        ArrayList<String> stringList = new ArrayList<>();
        stringList.add("Hello");

        System.out.println(stringList);

        // Coordinate is an unbounded generic class that takes generic types.
        // Generics cannot be primitive types - use the primitive class wrapper instead.
        Coordinate<Integer> graphPoint = new Coordinate<>(4, 7);
        Coordinate<String> targetPoint = new Coordinate<>("e", "3");
        Coordinate<Float> latLong = new Coordinate<>(51.513870f, -0.098362f);


    }

}
