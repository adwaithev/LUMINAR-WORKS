import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) {
   //this.getDetails()
  }

  currentuser = ""
  currentacc = ""

  user: any = {
    1000: { acno: 1000, username: "userone", password: "one", event: [] },
    1001: { acno: 1001, username: "usertwo", password: "two", event: [] },
    1002: { acno: 1002, username: "userthree", password: "three", event: [] }
  }


  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))

    if (this.currentuser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentuser))
    }
    if (this.currentacc) {
      localStorage.setItem("currentacc", JSON.stringify(this.currentacc))
    }
  }

  getDetails() {
    if (localStorage.getItem("user"))
      this.user = JSON.parse(localStorage.getItem("user") || "")

    if (localStorage.getItem("currentUser")) {
      this.currentuser = JSON.parse(localStorage.getItem("currentuser") || "")
    }
    if (localStorage.getItem("currentacc")) {
      this.currentacc = JSON.parse(localStorage.getItem("currentacc") || "")
    }
  }


  getReminders(acno:any) {
   const data={
     acno
   }
   return this.http.post("http://localhost:3003/getReminders",data,options)
  }

  register(uname: any, acno: any, pswd: any) {
    const data={
      uname,
      acno,
      pswd
    }

    return this.http.post("http://localhost:3003/register",data)


  }
    // let accDetails = this.user
    // if (acno in accDetails) {
    //   alert("user exists please login")
    //   return false
    // } else {
    //   accDetails[acno] = {
    //     username,
    //     acno,
    //     password,
    //     event: []
    //   }
    //   this.saveDetails();
    //   return true
    // }
  

  login(acno: any, pswd: any) {


    const data={
      acno,
      pswd
    }

    return this.http.post("http://localhost:3003/login",data,options)
    // let accDetails = this.user;
    // if (acno in accDetails) {
    //   if (password == accDetails[acno]["password"]) {
    //     this.currentacc = acno;
    //     this.currentuser = accDetails[acno]["username"]
    //     this.saveDetails();
    //     return true;

    //   } else {
    //     alert("incorrect password")
    //     return false;
    //   }
    // }
    // else {
    //   alert("invalid user,please sign in")
    //   return false;
    // }
  }

  add(acno:any,date: any, evnt: any) {

    const data={
      acno,
      date,
      evnt
    }
    return this.http.post("http://localhost:3003/add",data,options)

    // let accDetails = this.user
    //   accDetails[this.currentacc]["event"].push({
    //     evnt: evnt,
    //     date: date

    //   })
    // this.saveDetails()
    // return true
  }

deleteAcc(acno:any){
  return this.http.delete("http://localhost:3003/deleteAcc/"+acno,options)
}

}
