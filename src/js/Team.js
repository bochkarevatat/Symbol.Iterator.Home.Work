/* eslint-disable no-plusplus */
/* eslint-disable no-console */
export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addChar(...heroes) {
    for (const item of heroes) {
      this.characters.add(item);
    }
  }

  [Symbol.iterator]() {
    const { members, last } = this;
    console.log(this);
    let current = 0;
    return {
      next() {
        if (current < last) {
          return {
            done: false,
            value: members[current++],
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}
