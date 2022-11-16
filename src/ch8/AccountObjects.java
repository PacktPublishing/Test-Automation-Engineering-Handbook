package ch8;

public class AccountObjects {
    public static void main(String[] args) {
        Account johns_account = new Account();
        Account davids_account = new Account();

        johns_account.account_holder_name = "John Doe";
        johns_account.age = 32;
        johns_account.account_balance = 10000;
        johns_account.direct_deposit_enabled = true;
        johns_account.test_minimum_balance();

        davids_account.account_holder_name = "David Smith";
        davids_account.age = 35;
        davids_account.account_balance = 1000;
        davids_account.direct_deposit_enabled = true;
        davids_account.test_minimum_balance();
    }
}
