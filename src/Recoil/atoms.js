import { atom } from 'recoil';

export const userState = atom({
  key: "user",
  default: {}
});

export const cardsState = atom({
  key: "cards",
  default: []
})