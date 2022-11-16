package ch8;

public class Account {
    String account_holder_name;
    int age;
    float account_balance;
    boolean direct_deposit_enabled;
    boolean maintains_minimum_balance;

    public void test_minimum_balance(){
        if (account_balance > 5000) {
            maintains_minimum_balance = true;
        }
    }
}
