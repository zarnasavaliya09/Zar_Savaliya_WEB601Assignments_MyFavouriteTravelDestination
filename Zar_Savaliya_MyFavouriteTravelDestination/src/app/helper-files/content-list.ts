import { Content } from './content-interface';
class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  get content(): Content[] {

    return this.contentArray;
  }

  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  get length(): number {
    return this.contentArray.length;
  }


  getContentHtml(index: number): string {
    if (index < 0 || index >= this.contentArray.length) {
      return "<h1>Error: Index out of range</h1>";
    }
    const { title, description, creator, imgURL, type } = this.contentArray[index];

    let imgTag = '';
    if (imgURL) {
      imgTag = `<img src="${imgURL}" alt="${title}" height="700px" width="100%"/>`;
    }

    return `
      <div>
        <h2>${title}</h2>
        <p>Description: ${description}</p>
        <p>Creator: ${creator}</p>
        ${imgTag}
        <p>Type: ${type || 'N/A'}</p>
      </div>
    `;
  }
  
}

export { ContentList };
