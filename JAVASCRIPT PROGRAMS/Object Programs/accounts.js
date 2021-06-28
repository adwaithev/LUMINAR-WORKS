var accounts = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]

    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]

    },

    1002: {
        acno: 1002, ac_type: "savings", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
}


//1000 balance ?
console.log("q1",accounts[1000].balance)


//payment history of account number 1000
console.log("q2",accounts[1000].c_transactions);


//accoount 1002 credit transactions
console.log("q3",accounts[1002].c_transactions);

//print all credit transactions of acc no 1000 whose amount>500
accounts[1000].c_transactions.filter(transactions=>transactions.amount>500).forEach(transactions=>console.log(transactions));

//total of c transaction in 1000;
var total_credit=accounts[1000]["c_transactions"].map(transaction=>transaction.amount).reduce((amount1,amount2)=>amount1+amount2);
console.log(total_credit)
 

//ac no thousand credit transac lowest amount
var low_amount=accounts[1000]["c_transactions"].map(transaction=>transaction.amount).reduce((amount1,amount2)=>amount1<amount2?amount1:amount2);
console.log(low_amount);


//date of c_transactions acc no 1000
accounts[1000]["c_transactions"].forEach(transactions=>console.log(transactions.date))


//first date of c_transactions acc no 1000
console.log(accounts[1000]["c_transactions"][0].date);


