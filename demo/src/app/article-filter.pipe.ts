import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';
import { DataService } from './data.service';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  constructor(private dataService: DataService) {

  }

  transform(articles: Article[], keyword: string): any {
    return this.dataService.search(articles,keyword);
  }

}
