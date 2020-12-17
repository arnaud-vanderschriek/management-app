import { createModel } from "@rematch/core";

type UsersSate = {
  isModalOpened: boolean,
}

export const users = createModel({
    state: {
      isModalOpened: false,
    },
    reducers: {
      setIsModalOpened: (state: UsersSate, payload: boolean): UsersSate => ({...state, isModalOpened: payload}),
    },
    effects: {

    }
})