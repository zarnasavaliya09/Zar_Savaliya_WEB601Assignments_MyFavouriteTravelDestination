import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { TravelDestinationService } from '../services/travel-destination.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddContentDialogComponentComponent } from '../add-content-dialog-component/add-content-dialog-component.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  newContent: Content = { id: null, title: '', description: '', creator: '',type:'' };
  buttonText = 'Add Content';
  dialogRef: MatDialogRef<AddContentDialogComponentComponent> | undefined;

  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();


  constructor(private travelDestinationService: TravelDestinationService,
    private messageService: MessageService,
    public dialog: MatDialog){}

  openAddContentDialog() {
    this.dialogRef = this.dialog.open(AddContentDialogComponentComponent, {
      disableClose: true,
      width: '400px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.addContent(result);
        this.travelDestinationService.addContent(result).subscribe((content) => {
          this.contentAdded.emit(content);
          this.clearInputs();
          this.messageService.addMessage('Content added successfully.');
        });
      }
    });
  }
  addOrUpdateContent(): void {
    if (!this.newContent.id) {
      this.addContent();
    } else {
      this.updateContent();
    }
  }

  addContent(): void {
    this.travelDestinationService.addContent(this.newContent).subscribe((content) => {
      this.contentAdded.emit(content);
      this.clearInputs();
      this.messageService.addMessage('Content added successfully.');
    });
  }

  updateContent(): void {
    this.travelDestinationService.updateContent(this.newContent).subscribe(() => {
      this.contentAdded.emit(this.newContent);
      this.clearInputs();
      this.messageService.addMessage('Content updated successfully.');
      this.buttonText = 'Add Content';
    });
  }

  clearInputs(): void {
    this.newContent = { id: null, title: '', description: '', creator: '',type:''  };
  }
}
