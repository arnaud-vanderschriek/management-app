import { createModel } from "@rematch/core";
import { TimeSheetDataInterface, UserDataInterface } from "../..";
import { Toastify } from '../../../helpers/Toastify';
import { apiService } from '../../../http/service';

type UsersState = {
  linkList: string,
  usersData: UserDataInterface[],
  isModalOpened: boolean,
  timeSheetDatas: TimeSheetDataInterface,
}

export const users = createModel({
    state: {
      linkList: '',
      usersData: [],
      isModalOpened: false,
      timeSheetDatas: {}

    },
    reducers: {
      setIsModalOpened: (state: UsersState, payload: boolean): UsersState => ({...state, isModalOpened: payload}),
      setLinkList: (state: UsersState, payload: string): UsersState => ({...state, linkList: payload}),
      setDataUsers: (state: UsersState, payload: UserDataInterface[]): UsersState => ({...state, usersData: payload}),
      setTimeSheetDatas: (state: UsersState, payload: TimeSheetDataInterface): UsersState => ({...state, timeSheetDatas: payload}),
    },
    effects: {
      async fetchDataProject(): Promise<void> {
        
      },
      async fetchDataUser(dataUser): Promise<void> {
        console.log(dataUser, "id dans fetchDataUser")
        try {
          const { data} = await apiService.post('/users/getUser', dataUser)
          
          this.setDataUsers(data);
          console.log(data, 'data in fetchDataUser')
        } catch (error){
          (new Toastify()).error(`Failed to login. ${error.message}`);
        }
      },
      async postTimeSheetDatas(timeSheetDatas): Promise<void> {
        try {
          await apiService.post('/users/timesheet', timeSheetDatas)
        } catch (error) {
          (new Toastify()).error(`Failed to send timesheet datas. ${error.message}`);
        }
      }
    }
})
