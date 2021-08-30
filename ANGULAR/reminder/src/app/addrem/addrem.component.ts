import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addrem',
  templateUrl: './addrem.component.html',
  styleUrls: ['./addrem.component.css']
})
export class AddremComponent implements OnInit {

  addForm = this.fb.group({
    acno: ['', [Validators.required]],
    date: ['', [Validators.required]],
    evnt: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {

  }
  add() {

    if (this.addForm.valid) {
      var acno = this.addForm.value.acno;
      var date = this.addForm.value.date;
      var evnt = this.addForm.value.evnt;
      this.ds.add(acno, date, evnt)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )

    } else {
      alert("invalid form")
    }
  }
}