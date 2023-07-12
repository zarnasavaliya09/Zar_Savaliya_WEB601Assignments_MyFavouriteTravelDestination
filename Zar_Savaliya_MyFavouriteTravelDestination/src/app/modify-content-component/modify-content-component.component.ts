import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { MessageService } from '../services/message.service';
import { TravelDestinationService } from '../services/travel-destination.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  newContent: Content = { id: null, title: '', description: '', creator: '',type:'' };
  buttonText = 'Add Content';
  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();


  constructor(private travelDestinationService: TravelDestinationService,private messageService: MessageService){}

 
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
