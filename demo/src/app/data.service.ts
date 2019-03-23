import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  constructor() { }
}
