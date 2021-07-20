
function createUser() {
    let account_number = ac_no.value
    let password = pwd.value
    let balance = bal.value

    let user = {
        account_number: account_number,
        password: password,
        balance: balance
    }
    localStorage.setItem(user.account_number, JSON.stringify(user))
    alert("user created")
    location.href = "login.html"
    location.reload(true);//auto reload
}

function populate(users) {
    let htmlData = ""
    for (let user of users) {
        htmlData += `<p>account number:${user.account_number}password:${user.balance}balance:${user.password}<p>`

    }
    resultarea.innerHTML = htmlData;
}

function listAllUsers() {
    let users = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key)) //string to object
        users.push(user);//array of objects
    }
    populate(users)
}

function signIn() {
    let uname = username.value
    let pwd = password.value
    if (uname in localStorage) {
        let user = JSON.parse(localStorage.getItem(uname));
        if (user.password == pwd) {

            sessionStorage.setItem("user", uname)
            alert("login success")
            window.location.href = "userhome.html"
        } else {
            alert("incorrect password")
        }
    } else {
        alert("user not found")
    }
}


function displayBalance() {
    let user = sessionStorage.getItem("user");
    let data = JSON.parse(localStorage.getItem(user));
    alert(data.balance);
    console.log(data);
}

user = sessionStorage.getItem("user");
if (user) {
    profile.innerHTML = `${user}`
}

function logout() {
    sessionStorage.removeItem("user");
    location.href = "login.html"
}

user = sessionStorage.getItem("user")
if (user) {
    profile.innerHTML = `${user}`
}


function getUser(acno) {
    let user = JSON.parse(localStorage.getItem(acno))
    return user; //entering account number to return user details
}

function fundTransfer() {
    let to_acc_num = to_acc.value
    let conf_acc_num = conf_acc.value
    let amount = amnt.value
    if (to_acc_num in localStorage) {
        let user = sessionStorage.getItem("user");      //fetching detail object of logged in user

        let account = getUser(user)
        if (account.balance < amount) {
            alert("insufficient fund")
        }
        else {
            account.balance -= amount;                          //deducting amount from logged in user
            localStorage.setItem(user, JSON.stringify(account))  //updating to local storage
            let credit_acc = getUser(to_acc_num)                    //details of to account
            localStorage.setItem(to_acc_num, JSON.stringify(credit_acc)) //updating to local storage
            credit_acc.balance += amount;                                //adding amount to credit account
        }
    }
    else {
        alert("invalid user")
    }
}
