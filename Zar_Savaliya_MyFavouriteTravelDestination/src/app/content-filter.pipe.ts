import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentList: any[], type: string = ''): any[] {
    if (type === '') {
      return contentList;
    } else {
      return contentList.filter(item => item.type === type);
    }
  }

}
