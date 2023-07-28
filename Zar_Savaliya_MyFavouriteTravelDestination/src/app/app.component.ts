import { Component, OnInit } from '@angular/core';
import { TravelDestinationService } from './services/travel-destination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Zar_Savaliya_MyFavouriteTravelDestination';

  singleContentItem:any;
  requestedContentId: any;
  constructor(private traveldestinationService:TravelDestinationService){

  }
  ngOnInit(): void {
    // const idNumber = 3;
    // this.traveldestinationService.getContentItemById(idNumber).subscribe((data)=>{
    //     this.singleContentItem = data;
    //     console.log('singleContentItem', this.singleContentItem);
    // });
  }

  getRequestedContent() {
    console.log('this.requestedContentId',this.requestedContentId);
    this.traveldestinationService.getContentItemById(this.requestedContentId).subscribe(item => {
      console.log('item',item);
      this.singleContentItem = item;
      console.log('singleContentItem click',this.singleContentItem);
    });
  }
}
