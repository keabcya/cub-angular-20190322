import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() headerTitle: string;
  subtitle = '記載著 Will 在網路世界的學習心得與<u>技術分享</u>';
  url = 'https://blog.miniasp.com/';
  titleLeft = true;
  headerColor = 'red';
  isHighlight = true;

  fontSize = 15;

  constructor() { }

  ngOnInit() {
    console.log('1');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2');
    // console.log(changes);
  }

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;

    this.fontSize += 2;
  }

}
