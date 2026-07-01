DECLARE
    CURSOR c_customers IS
        SELECT customer_id, balance FROM Customers;
BEGIN
    FOR v_cust IN c_customers LOOP
        IF v_cust.balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE' -- Assuming IsVIP is a VARCHAR/CHAR or BOOLEAN column
            WHERE customer_id = v_cust.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
/