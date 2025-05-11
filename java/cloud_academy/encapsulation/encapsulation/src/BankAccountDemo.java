public class BankAccountDemo {
    public static void main(String[] args) {
        BankAccount myAccount = new BankAccount("Jonny Ellis", 9000);
        BankAccount yourAccount = new BankAccount("Neil Andrew Megson");

        System.out.println("Owner: " + yourAccount.getOwner());
        System.out.println("Balance: " + yourAccount.getBalance());
        System.out.println();

        yourAccount.deposit(5000);
        System.out.println("Owner: " + yourAccount.getOwner());
        System.out.println("Balance: " + yourAccount.getBalance());
        System.out.println();

        yourAccount.withdraw(9000);
        System.out.println("Owner: " + yourAccount.getOwner());
        System.out.println("Balance: " + yourAccount.getBalance());
        System.out.println();

        myAccount.withdraw(7000);
        System.out.println("Owner: " + myAccount.getOwner());
        System.out.println("Balance: " + myAccount.getBalance());
        System.out.println();

        myAccount.deposit(300);
        System.out.println("Owner: " + myAccount.getOwner());
        System.out.println("Balance: " + myAccount.getBalance());
        System.out.println();

    }
}
