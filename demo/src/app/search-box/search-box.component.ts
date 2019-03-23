import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  keyword = '';

  @Output() keywordSearch = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  search(e: MouseEvent) {

    // this.articles = this.originalArticles
    //   .filter(article => article.title.indexOf(keyword) !== -1);
    this.keywordSearch.emit(this.keyword);
  }
}
