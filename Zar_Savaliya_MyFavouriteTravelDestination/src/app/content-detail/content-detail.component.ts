import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';
import { TravelDestinationService } from '../services/travel-destination.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {

  singleContentItem :any;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private traveldestinationService:TravelDestinationService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const contentId = Number(params.get('id'));
      console.log('contentIdqq',contentId);
      this.singleContentItem = this.traveldestinationService.getContentById(contentId);

      console.log("singleContentItemjd",this.singleContentItem);
    });
  }
}
