export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};
export default function choosingAttak(number) {
  const { special } = character;
  for (const attak of special) {
    if (attak.id === number) {
      if (!('description' in attak)) {
        Object.defineProperty(attak, 'description', {
          value: 'Описание недоступно',
        });
      }
      return attak;
    }
  }
}
