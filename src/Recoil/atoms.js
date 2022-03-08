import { atom } from 'recoil';

export const userState = atom({
  key: "user",
  default: {}
});

export const cardsState = atom({
  key: "cards",
  default: []
});

export const setState = atom({
  key: "set",
  default: "base"
});