//createAccount
//balanceEnquiry
//deposit
//withdrawal




class Bank{
    createAccount(acc_no,name,balance){
        this.acc_no=acc_no;
        this.name=name;
        this.balance=balance;
    }
    balanceEnquiry(){
        console.log("your available balance is"+this.balance);
    }
    deposit(amount){
        this.balance+=amount;
        console.log("your account"+this.acc_no+"has been debited with amount"+amount+"your available balance is"+this.balance);
    }
    withdrawal(amount){
      
        if(amount>this.balance){
        this.balance-=amount;
        
        }
        else{
            console.log("transaction failed insufficient balance ");
        }
    }

}

var obj=new Bank();
obj.createAccount(101,"vijay",1000)
console.log(obj)
obj.withdrawal(200)