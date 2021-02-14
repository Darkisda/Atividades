import { Market } from './models/Market';
import { Product, UnitMeansurement } from './models/Product';
import { Tend } from './models/Tend';
import { User } from './models/User';

const luan = new User('Luan', 'de Souza');

const manga = new Product('Manga', 1.5, UnitMeansurement.KG);
const umbu = new Product('Umbu', 1.0, UnitMeansurement.KG);

const barraca = new Tend('Barraca Exemplo', 'Parelhas', luan);

const feira = new Market();

barraca.addProduct(manga);
barraca.addProduct(umbu);

console.log('Barraca: ', barraca.show());

feira.addTend(barraca);
feira.addTend(barraca);

console.log('Feira: ', feira.show());
