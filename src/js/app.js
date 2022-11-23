/* eslint-disable no-console */
import Team from './Team';
import Bowman from './Bowman';
import Swordsman from './Swordsman';

const person1 = new Bowman('Лучник');
const person2 = new Swordsman('Мечник');

const team = new Team();
team.addChar(person1, person2);
for (const hero of team) {
  console.log(hero);
}
console.log('add module');
