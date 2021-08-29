import { randomCategory } from './categories';

const id = () => Math.random();

const sampleBooks = [
  {
    id: id(), title: 'My Sister, the Serial Killer', category: randomCategory(), author: 'Oyinkan Braithwaite',
  },
  {
    id: id(), title: 'Lagoon', category: randomCategory(), author: 'Nnedi Okorafor',
  },
  {
    id: id(), title: 'Purple Hibiscus', category: randomCategory(), author: 'Chimamanda Ngozi Adichie',
  },
  {
    id: id(), title: 'A Particular Kind of Black Man', category: randomCategory(), author: 'Tope Folarin',
  },
  {
    id: id(), title: 'Things Fall Apart', category: randomCategory(), author: 'Chinua Achebe',
  },
  {
    id: id(), title: 'The Joys of Motherhood', category: randomCategory(), author: 'Buchi Emecheta',
  },
  {
    id: id(), title: 'Everything Good Will Come', category: randomCategory(), author: 'Sefi Atta',
  },
  {
    id: id(), title: 'I Do Not Come to You by Chance', category: randomCategory(), author: 'Adaobi Tricia Nwaubani',
  },
];

export default sampleBooks;
