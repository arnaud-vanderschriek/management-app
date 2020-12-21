import { createModel } from "@rematch/core";

type NavbarSate = {
  list: [],
  isModalOpened: boolean,
}

export const navbar = createModel({
    state: {
      list: [],
      isModalOpened: false,
    },
    reducers: {
      setIsModalOpened: (state: NavbarSate, payload: boolean): NavbarSate => ({...state, isModalOpened: payload}),
    },
    effects: {

    }
})