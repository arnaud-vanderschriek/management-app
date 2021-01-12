import { createModel } from "@rematch/core";
import { Toastify } from "../../../helpers/Toastify";
import { apiService } from "../../../http/service";
import { DataProject } from  "../../index";

export interface DataProjectState {
  dataProject: DataProject,
}

export const admin = createModel({
  state: {
    dataProject: {},
  } as DataProjectState,
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
    }
  },
  effects: {
      async addDataProject(state): Promise<void> {
        console.log(admin.state.dataProject)
        try {
          console.log("je rentre dans ton cul", state)
          await apiService.post('/users/dataProject', state)
        }catch (err) {
          (new Toastify()).error('hein hein, vous n avez pas rentrer le mot de magique')
        }
      }
  }   
})