export interface Article {
  title: string;
  content: string;
  summary: string;
  age?: number;
}

interface Test { title: string;}

const a: Article = {
  title: 'tset',
  content: 'test'
};
