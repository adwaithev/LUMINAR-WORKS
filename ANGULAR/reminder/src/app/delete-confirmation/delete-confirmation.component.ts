import { Component, Input, Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() item: string | undefined
  @Output() onDelete= new EventEmitter
  @Output() onCancel= new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    alert("deleting....")
    this.onDelete.emit(this.item)

  }

  cancel() {
    alert("canceling.....")
    this.onCancel.emit()
  }
}
