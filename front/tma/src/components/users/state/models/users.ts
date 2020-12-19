import { createModel } from "@rematch/core";

type UsersSate = {
  list: [],
  isModalOpened: boolean,
}

export const users = createModel({
    state: {
      list: [],
      isModalOpened: false,
    },
    reducers: {
      setIsModalOpened: (state: UsersSate, payload: boolean): UsersSate => ({...state, isModalOpened: payload}),
    },
    effects: {

    }
})