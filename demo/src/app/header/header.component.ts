import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'test';
  subtitle = '記載著 Will 在網路世界的學習心得與<u>技術分享</u>';
  url = 'https://blog.miniasp.com/';
  titleLeft = true;
  headerColor = 'red';
  isHighlight = true;

  fontSize = 15;

  constructor() { }

  ngOnInit() {
  }

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;

    this.fontSize += 2;
  }

}
