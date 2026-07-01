package com;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class MathOperationsTest {

    @Test
    public void testAdd() {
        MathOperations math = new MathOperations();
        int result = math.add(10, 5);
        assertEquals(15, result);
    }
}