package com;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BankAccountTest {
    
    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount();
    }

    @Test
    public void testDeposit() {
        // Arrange
        double depositAmount = 100.0;
        double expectedBalance = 100.0;

        // Act
        account.deposit(depositAmount);

        // Assert (the third parameter is the delta for comparing doubles)
        assertEquals(expectedBalance, account.getBalance(), 0.001);
    }

    @After
    public void tearDown() {
        account = null; 
    }
}