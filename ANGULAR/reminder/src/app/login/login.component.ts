import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9a-z]*')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }




  login() {

    if (this.loginForm.valid) {
      var acno = this.loginForm.value.acno;
      var pswd = this.loginForm.value.pswd
      this.ds.login(acno, pswd)
        .subscribe((result: any) => {
          if (result) {
            localStorage.setItem("currentAcc",result.currentAcc)
            localStorage.setItem("currentUser",result.currentUser)
            alert(result.message)
            this.router.navigateByUrl('dashboard')
          }
        },
          (result) => {
            alert(result.error.message)
            this.router.navigateByUrl("")
          }
        )

    } else {
      alert("invalid form")
    }
  }

}


