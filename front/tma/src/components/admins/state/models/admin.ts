import { createModel } from "@rematch/core";
import { Toastify } from "../../../helpers/Toastify";
import { apiService } from "../../../http/service";
import { AdminFactory } from "../../factory/AdminFactory";
import { DataProject, UsersList } from "../../index";

export interface DataProjectState {
  dataProject: DataProject,
  linkList: string | null,
  usersList: UsersList[],
}

export const admin = createModel({
  state: {
    dataProject: AdminFactory.createEmptyDataProject(),
    linkList: '',
    usersList: [],
  },
  reducers: {
    resetDataProject: (state: DataProjectState) => ({ ...state, dataProject: AdminFactory.createEmptyDataProject() }),
    updateDataProject: (state: DataProjectState, payload: DataProject ): DataProjectState => {
      let dataProject = {
        ...state.dataProject,
        ...payload, 
      };
      return {
        ...state,
        dataProject,
      };
    },
    setLinkList: (state: DataProjectState, payload: string ): DataProjectState => ({ ...state, linkList: payload }),
    setUsersList: (state: DataProjectState, payload: UsersList[]): DataProjectState => ({ ...state, usersList: payload }),
    updateUserOnProject: (state: DataProjectState, payload: string[]): DataProjectState => {
      console.log(state.dataProject, 'dataProject dans models')
      return {
        ...state,
        dataProject: { ...state.dataProject, usersOnProject: payload }
      };
    },
    updateWpOnProject: (state: DataProjectState, payload: string[]): DataProjectState => {
      return {
        ...state, 
        dataProject: {...state.dataProject, workPackagesOnProject: payload}
      }
    }
  },
  effects: {
    async fetchUsers(): Promise<void> {
      try {
       const data = await apiService.get('/users/getAllUsers')
        console.log(data, ': data from fetchUsers');
        this.setUsersList(data.data)
          
      } catch (err) {
        (new Toastify()).error('impossible de fetch les users')
      }
    },
      async addDataProject(state): Promise<void> {
        console.log(state, 'serait-ce')
        try {
          await apiService.post('/users/dataProject', state);

          (new Toastify()).info('the data has been sent')
        }catch (err) {
          (new Toastify()).error('hein hein, vous n avez pas rentrer le mot de magique')
        }
      },
      async sendDataForUserContract(state): Promise<void> { 
        console.log("hebentoi")
        try {
          await apiService.post('/users/addUsers', state)

        }catch (err) {
          (new Toastify()).error('impossible to send data')
        }
      }
  }   
})
