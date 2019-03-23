import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  keyword = '';

  @Output() keywordSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(e: MouseEvent) {
    this.keywordSearch.emit(this.keyword);
  }
}
