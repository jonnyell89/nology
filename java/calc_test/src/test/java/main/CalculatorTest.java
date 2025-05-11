package main;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private Calculator calculator;

    // @NestedClass

    // Instantiates a new Calculator object for use in each test
    @BeforeEach
    void setUp() {
        Calculator calculator = new Calculator();
    }

    // methodName_StateUnderTest_ExpectedBehaviour
    @Test
    @DisplayName("5 + 7 = 12")
    void add_ValidInputs_ReturnsCorrectAnswer() {
        int result = calculator.add(5, 7);
        // assertEquals(expected, actual);
        assertEquals(12, result);
    }

    @Test
    @DisplayName("7 - 2 = 5")
    void subtract_ValidInputs_ReturnCorrectAnswer() {
        int result = calculator.subtract(7, 2);
        assertEquals(5, result);
    }

    @Test
    void multiply() {
    }

    @Test
    void divide() {
    }
}
