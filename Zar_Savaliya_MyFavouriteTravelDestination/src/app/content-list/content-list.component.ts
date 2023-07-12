import { Component, OnInit } from '@angular/core';
import { TravelDestinationService } from '../services/travel-destination.service';
import { Content } from '../helper-files/content-interface';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  contentListArray: Content[] = [];

  constructor(private traveldestinationService:TravelDestinationService,private inMemoryDataService:InMemoryDataService){
    //this.contentListArray = contentListArray;
  }
  ngOnInit(): void {
    this.getContents();
    this.traveldestinationService.getContentArray().subscribe((data: any[])=>{
      //this.contentListArray=data;
    });
  }
  highlightedItemIndex: number = -1;
  searchTitle: string = '';
  searchResult: string = '';
  isContentFound: boolean = false;

  

  displayContent(contentItem: any) {
    console.log('Content ID:', contentItem.id);
    console.log('Content Title:', contentItem.title);
  }

  public searchContentItem() {
    // const foundItem = this.contentListArray.find(item => item.title === this.searchTitle);
    // this.isContentFound = !!foundItem;
    // this.searchResult = this.isContentFound ? 'Content item found!' : 'Content item not found!';
 
  }
  getContents(): void {
    this.traveldestinationService.getContent().subscribe((contents) => {
      this.contentListArray = contents;
    });
  }
  handleContentAdded(content: Content): void {
    const existingContentIndex = this.contentListArray.findIndex((c) => c.id === content.id);

    if (existingContentIndex !== -1) {
      this.contentListArray[existingContentIndex] = content;
    } else {
      this.contentListArray.push(content);
    }
  }
}
