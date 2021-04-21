import { createModel } from "@rematch/core";
import { Toastify } from "../../../helpers/Toastify";
import { apiService } from "../../../http/service";
import { DataProject, UsersList } from "../../index";

export interface DataProjectState {
  dataProject: DataProject,
  linkList: string | null,
  usersList: UsersList[],
}

export const admin = createModel({
  state: {
    dataProject: {},
    linkList: '',
    usersList: [],
  },
  reducers: {
    updateDataProject: (state: DataProjectState, payload: DataProject ): DataProjectState => {
      let dataProject = {
        ...state.dataProject,
        ...payload, 
      };
      console.log(state.dataProject, "dataProject in models")
      return {
        ...state,
        dataProject,
      };
    },
    setLinkList: (state: DataProjectState, payload: string ): DataProjectState => ({...state, linkList: payload}),
    setUsersList: (state: DataProjectState, payload: UsersList[]): DataProjectState => ({...state, usersList: payload}),
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
          await apiService.post('/users/dataProject', state)

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
