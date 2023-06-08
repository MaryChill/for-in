import choosingAttak from '../index';

test('check attak without description', () => {
  const a = choosingAttak(9);
  expect(a).toEqual({
    icon: 'http://...',
    id: 9,
    name: 'Нокаутирующий удар',

  });
});
test('check attak with description', () => {
  const a = choosingAttak(8);
  expect(a).toEqual({
    description: 'Двойной выстрел наносит двойной урон',
    icon: 'http://...',
    id: 8,
    name: 'Двойной выстрел',

  });
});
