import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewrem',
  templateUrl: './viewrem.component.html',
  styleUrls: ['./viewrem.component.css']
})
export class ViewremComponent implements OnInit {


  events: any
  acno: any

  constructor(public ds: DataService) {
    this.acno = localStorage.getItem("currentAcc")
    this.ds.getReminders(this.acno)
      .subscribe((result: any) => {
        if (result) {
          this.events = result.event
        }
      },
        (result) => {
          alert(result.error.message)
        }
      )
  }

  ngOnInit(): void {
  }

}
