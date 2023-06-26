import { Component, OnInit } from '@angular/core';
import { TravelDestinationService } from '../services/travel-destination.service';
import { contentListArray } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  contentListArray:any[];

  constructor(private traveldestinationService:TravelDestinationService){
    this.contentListArray = contentListArray;
  }
  ngOnInit(): void {
    this.traveldestinationService.getContentArray().subscribe((data: any[])=>{
      this.contentListArray=data;
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
    const foundItem = this.contentListArray.find(item => item.title === this.searchTitle);
    this.isContentFound = !!foundItem;
    this.searchResult = this.isContentFound ? 'Content item found!' : 'Content item not found!';
 
  }
}
