DECLARE
    -- Cursor to fetch all customers
    CURSOR c_customers IS
        SELECT customer_id, age FROM Customers;
BEGIN
    FOR v_cust IN c_customers LOOP
        IF v_cust.age > 60 THEN
            -- Assuming subtracting 1 percentage point from the rate
            UPDATE Loans
            SET interest_rate = interest_rate - 1
            WHERE customer_id = v_cust.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
/