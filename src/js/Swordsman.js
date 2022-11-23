/* eslint-disable no-plusplus */
import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');

    this.attack = 35;
    this.defence = 25;
  }
}
