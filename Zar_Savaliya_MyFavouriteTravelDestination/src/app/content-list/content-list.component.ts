import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  highlightedItemIndex: number = -1;
  searchTitle: string = '';
  searchResult: string = '';
  isContentFound: boolean = false;

  contentListArray = [
    {
      id: 1,
      title: 'Vancouver',
      description: 'The City of Vancouver is a coastal, seaport city on the mainland of British Columbia. Located on the western half of the Burrard Peninsula, Vancouver is bounded to the north by English Bay and the Burrard Inlet and to the south by the Fraser River.',
      creator: 'F. Scott Fitzgerald',
      imgURL: '',
      type: 'Nature',
      tags: ['nature', 'mountains', 'waterfall']
    },
    {
      id: 2,
      title: 'Chilliwack',
      description: 'Launched in 2006, the Chilliwack Tulip Festival is the first attraction of its kind in the Fraser Valley. Wander the designated pathways through 7 million tulips to brighten your view, along with plenty of aromatic hyacinths and double daffodils.',
      creator: 'Frank Darabont',
      imgURL: 'https://i.imgur.com/HWRchaW.jpeg',
      type: 'Tulip festival',
      tags: ['nature', 'beauty', 'tulipflower']
    },
    {
      id: 3,
      title: 'English Bay',
      description: 'English Bay Beach, also called First Beach, located along Beach Ave between Gilford St and Bidwell St, is the most populated beach area in Vancouver downtown area. The Stanley Park Seawall, a popular running and biking route, runs along the east side of the beach',
      creator: 'John Lennon, Paul McCartney, George Harrison, and Ringo Starr',
      imgURL: 'https://i.imgur.com/yIvm1ob.jpeg',
      type: 'beach',
      tags: ['beach', 'mountain', 'water']
    },
    {
      id: 4,
      title: 'Whistler',
      description: 'Whistler Village is the beating heart of a social community where locals bring their up-for-anything attitude to every shop, restaurant and gathering place – its energy is palpable.',
      creator: 'F. Scott Fitzgerald',
      imgURL: 'https://cdn.whistler.com/s3/images/og/whistler-village-bc.jpg',
      type: 'Nature',
      tags: ['nature', 'mountains', 'Gondola']
    },
    {
      id: 5,
      title: 'Joffre Lakes Provincial Park',
      description: 'Joffre Lakes Provincial Park is a class A provincial park located 35 kilometres (22 mi) east of Pemberton in British Columbia, Canada.',
      creator: 'Frank Darabont',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Upper_Joffre_Lake_-_British_Columbia%2C_Canada.jpg/1280px-Upper_Joffre_Lake_-_British_Columbia%2C_Canada.jpg',
      type: 'Mountains',
      tags: ['nature', 'beauty', 'Mountain']
    },
    {
      id: 6,
      title: 'Stanley Park',
      description: 'Stanley Park is a 405-hectare (1,001-acre) public park in British Columbia, Canada that makes up the northwestern half of Vancouvers Downtown Peninsula, surrounded by waters of Burrard Inlet and English Bay.',
      creator: 'John Lennon, Paul McCartney, George Harrison, and Ringo Starr',
      imgURL: 'https://i0.wp.com/vancouversbestplaces.com/wp-content/uploads/2020/08/Stanley-Park-Lighthouse-by-On-the-Mark-Drone-Services.jpg?resize=640%2C353&ssl=1',
      type: 'park',
      tags: ['park', 'cycling', 'water']
    },
    {
      id: 7,
      title: 'Cypress Mountain',
      description: 'Cypress Mountain in West Vancouver, B.C., Canada. Cypress is only 30 minutes from downtown Vancouver.',
      creator: 'John Lennon, Paul McCartney,and Ringo Starr',
      imgURL: 'https://www.straight.com/files/v3/styles/gs_feature/public/images/17/11/cypress_c_fb.jpg?itok=K6dkj6kW',
      type: 'Mountain',
      tags: ['hiking', 'snow']
    },
  ];

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
