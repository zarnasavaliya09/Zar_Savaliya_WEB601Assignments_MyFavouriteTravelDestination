import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-add-content-dialog-component',
  templateUrl: './add-content-dialog-component.component.html',
  styleUrls: ['./add-content-dialog-component.component.scss']
})
export class AddContentDialogComponentComponent {

  content: Content = {
    id: 0,
    title: '',
    description: '',
    creator:'',
    type: ''
  };

  constructor(public dialogRef: MatDialogRef<AddContentDialogComponentComponent>) { }

  cancel() {
    this.dialogRef.close();
  }

  addContent() {
    this.dialogRef.close(this.content);
  }
}
