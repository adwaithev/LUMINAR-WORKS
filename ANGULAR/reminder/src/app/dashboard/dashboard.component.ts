import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any
  acno: any



  constructor(private ds: DataService, private router: Router) {
    this.user = localStorage.getItem("currentUser")
  }

  ngOnInit(): void {
  }

  DeleteAcc() {
    this.acno = localStorage.getItem("currentAcc")
  }

  onDelete(event: any) {
    this.ds.deleteAcc(event)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl('register')
        }
      },
        (result) => {
          alert(result.error.message)
        })
  }
 

  onCancel() {
    this.acno = ""
  }

}
