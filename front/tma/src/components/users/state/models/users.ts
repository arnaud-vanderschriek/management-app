import { createModel } from "@rematch/core";

type UsersSate = {
  list: [],
  linkList: string,
  isModalOpened: boolean,
}

export const users = createModel({
    state: {
      list: [],
      linkList: '',
      isModalOpened: false,
    },
    reducers: {
      setIsModalOpened: (state: UsersSate, payload: boolean): UsersSate => ({...state, isModalOpened: payload}),
      setLinkList: (state: UsersSate, payload: string): UsersSate => ({
        ...state, linkList: payload}),
    },
    effects: {
      async fetchDataProject(): Promise<void> {
        
      }
    }
})
