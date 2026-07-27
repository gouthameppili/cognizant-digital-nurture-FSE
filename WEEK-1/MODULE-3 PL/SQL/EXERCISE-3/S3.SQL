CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account_id IN NUMBER,
    p_target_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    -- Check source balance
    SELECT balance INTO v_source_balance 
    FROM Accounts 
    WHERE account_id = p_source_account_id;

    IF v_source_balance >= p_amount THEN
        -- Deduct from source
        UPDATE Accounts 
        SET balance = balance - p_amount 
        WHERE account_id = p_source_account_id;

        -- Add to target
        UPDATE Accounts 
        SET balance = balance + p_amount 
        WHERE account_id = p_target_account_id;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer successful.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in the source account.');
        ROLLBACK;
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: One or both accounts do not exist.');
        ROLLBACK;
END TransferFunds;
/