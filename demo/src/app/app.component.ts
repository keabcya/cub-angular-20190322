import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  subtitle = '記載著 Will 在網路世界的學習心得與<u>技術分享</u>';
  url = 'https://blog.miniasp.com/';
  titleLeft = true;

  defaultKeyword = 'angular';
  keyword = '';

  articles = [
    {
      title: 'test1',
      content: 'hello'
    },
    {
      title: 'test2',
      content: 'hello world',
      age: 9
    }
  ];

  originalArticles = this.articles;

  search(e: MouseEvent) {
    if (e.altKey) {
      this.title = this.title + '!';
    }
    console.log(e.altKey);
  }

  keywordInput(e: KeyboardEvent) {
    this.keyword = (e.target as HTMLInputElement).value;
  }

  searchKeyword() {
    console.log(this.keyword);
  }

  searchArticle(keyword) {
    this.title = this.title + '!';
    // console.log(keyword);
    this.articles = this.originalArticles
      .filter(article => article.title.indexOf(keyword) !== -1);
  }
}


// ---- 模擬的 Angular 行為 ----

// const component = new HeaderComponent();

// // 檢查是否需要 service
// if(hasService) {
//   // const service = new DataService();
//   const service = new FakeService();
//   component.dataService = service;
// }
// component.ngOnInit();

// while(true) {
//   // 變更偵測
//   const newHeaderTitle = 'test2';
//   const chnage = true;
//   if(change) {
//     component.headerTitle = newHeaderTitle;
//     component.ngOnChanges({...});
//   }
// }
