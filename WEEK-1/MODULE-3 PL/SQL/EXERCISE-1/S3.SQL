BEGIN
    -- Enable server output to print messages
    DBMS_OUTPUT.ENABLE;
    
    FOR v_loan IN (
        SELECT c.customer_name, l.loan_id, l.due_date 
        FROM Loans l
        JOIN Customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || v_loan.customer_name || 
                             ', your loan (' || v_loan.loan_id || ') is due on ' || v_loan.due_date);
    END LOOP;
END;
/