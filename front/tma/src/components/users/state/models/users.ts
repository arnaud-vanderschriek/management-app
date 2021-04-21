import { createModel } from "@rematch/core";
import { TimeSheetDataInterface, UserDataInterface, UserProjectInterface } from "../..";
import { Toastify } from '../../../helpers/Toastify';
import { apiService } from '../../../http/service';

type UsersState = {
  linkList: string,
  usersData: UserDataInterface[],
  userProject: UserProjectInterface[],
  isModalOpened: boolean,
  timeSheetDatas: TimeSheetDataInterface,
}

export const users = createModel({
    state: {
      linkList: '',
      usersData: [],
      userProject: [],
      isModalOpened: false,
      timeSheetDatas: {},
    },
    reducers: {
      setIsModalOpened: (state: UsersState, payload: boolean): UsersState => ({...state, isModalOpened: payload}),
      setLinkList: (state: UsersState, payload: string): UsersState => ({...state, linkList: payload}),
      setDataUsers: (state: UsersState, payload: UserDataInterface[]): UsersState => ({...state, usersData: payload}),
      setTimeSheetDatas: (state: UsersState, payload: TimeSheetDataInterface): UsersState => ({...state, timeSheetDatas: payload}),
      setUserProject: (state: UsersState, payload: UserProjectInterface[]): UsersState => ({...state, userProject: payload}),
    },
    effects: {
      async fetchDataProject(id): Promise<void> {
        console.log("id", id)
        try {
          const { data } = await apiService.post('/users/getProject', {'id': id})
          console.log(data, "data in front")

          this.setUserProject(data);

          console.log(users.state.userProject, "state de users pour userProject")


        } catch (error) {
          (new Toastify()).error(`Failed to login. ${error.message}`);
        }
      },
      async fetchDataUser(dataUser): Promise<void> {
        try {
          const { data} = await apiService.post('/users/getUser', dataUser)
          
          this.setDataUsers(data);
        } catch (error){
          (new Toastify()).error(`Failed to login. ${error.message}`);
        }
      },
      async postTimeSheetDatas(dataTimeSheet): Promise<void> {
        console.log('dataTimeSheet: ', dataTimeSheet)
        try {
          await apiService.post('/users/timesheet', dataTimeSheet)
        } catch (error) {
          (new Toastify()).error(`Failed to send timesheet datas. ${error.message}`);
        }
      },
    }
})
