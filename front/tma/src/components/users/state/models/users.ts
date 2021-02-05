import { createModel } from "@rematch/core";
import { Toastify } from '../../../helpers/Toastify';
import { apiService } from '../../../http/service';

type UsersState = {
  list: [],
  linkList: string,
  usersData: {},
  isModalOpened: boolean,
}

export const users = createModel({
    state: {
      list: [],
      linkList: '',
      usersData: {},
      isModalOpened: false,
    },
    reducers: {
      setIsModalOpened: (state: UsersState, payload: boolean): UsersState => ({...state, isModalOpened: payload}),
      setLinkList: (state: UsersState, payload: string): UsersState => ({...state, linkList: payload}),
      setDataUsers: (state: UsersState, payload: UsersState): UsersState => ({...state, usersData: payload})
    },
    effects: {
      async fetchDataProject(): Promise<void> {
        
      },
      async fetchDataUser(): Promise<void> {
        try {
          const { data } = await apiService.get('/users/getUsers')

        } catch (error){
          (new Toastify()).error(`Failed to login. ${error.message}`);
        }

      }
    }
})
