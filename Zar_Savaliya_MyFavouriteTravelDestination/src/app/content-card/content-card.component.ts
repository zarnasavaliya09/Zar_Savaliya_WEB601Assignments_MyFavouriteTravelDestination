import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.add({
      id: 1,
      title: 'Vancouver',
      description: 'The City of Vancouver is a coastal, seaport city on the mainland of British Columbia. Located on the western half of the Burrard Peninsula, Vancouver is bounded to the north by English Bay and the Burrard Inlet and to the south by the Fraser River.',
      creator: 'F. Scott Fitzgerald',
      imgURL: 'https://i.imgur.com/lDVWa9e.jpeg',
      type: 'Nature',
      tags: ['nature', 'mountains', 'waterfall']
    });
    this.contentList.add({
      id: 2,
      title: 'Chilliwack',
      description: 'Launched in 2006, the Chilliwack Tulip Festival is the first attraction of its kind in the Fraser Valley. Wander the designated pathways through 7 million tulips to brighten your view, along with plenty of aromatic hyacinths and double daffodils.',
      creator: 'Frank Darabont',
      imgURL: 'https://i.imgur.com/HWRchaW.jpeg',
      type: 'Tulip festival',
      tags: ['nature', 'beauty', 'tulipflower']
    });
    this.contentList.add({
      id: 3,
      title: 'English Bay',
      description: 'English Bay Beach, also called First Beach, located along Beach Ave between Gilford St and Bidwell St, is the most populated beach area in Vancouver downtown area. The Stanley Park Seawall, a popular running and biking route, runs along the east side of the beach',
      creator: 'John Lennon, Paul McCartney, George Harrison, and Ringo Starr',
      imgURL: 'https://i.imgur.com/yIvm1ob.jpeg',
      type: 'beach',
      tags: ['beach', 'mountain', 'water']
    });
  }
}
