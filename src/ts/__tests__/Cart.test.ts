
import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Cart total sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avatar', 600, 2009, 'USA', ['фантастика', 'боевик', 'драма', 'приключения'],{hours: 2, minutes: 42}, 'Это новый мир'));

  const sum = cart.totalSum();
  expect(sum).toBe(3500);
})

test ('Sum with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avatar', 600, 2009, 'USA', ['фантастика', 'боевик', 'драма', 'приключения'],{hours: 2, minutes: 42}, 'Это новый мир'));

  const sum = cart.totalSumDiscount(10);
  expect(sum).toBe(3150);
})

test ('Delete item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avatar', 600, 2009, 'USA', ['фантастика', 'боевик', 'драма', 'приключения'],{hours: 2, minutes: 42}, 'Это новый мир'));

  cart.deleteItem(2)

  const correct = {"_items": [{"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000}, {"author": "Linkin Park", "id": 1008, "name": "Meteora", "price": 900}, {"country": "USA", "duration": {"hours": 2, "minutes": 42}, "genre": ["фантастика", "боевик", "драма", "приключения"], "id": 1009, "name": "Avatar", "price": 600, "slogan": "Это новый мир", "year": 2009}]}

  expect(cart).toEqual(correct);
})