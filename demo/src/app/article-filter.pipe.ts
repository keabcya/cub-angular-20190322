import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(articles: Article[], keyword: string): any {
    return articles
      .filter(article => article.title.indexOf(keyword) !== -1);
  }

}
