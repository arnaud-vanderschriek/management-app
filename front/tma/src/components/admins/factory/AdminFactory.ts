import { DataProject } from "..";

export class AdminFactory {
  static createEmptyDataProject(): DataProject {
    return {
      projectName: '',
      projectCode: '',
      startDate: '',
      endDate: '',
      hours: '',
      budget: '',
      usersOnProject: [],
      workPackagesOnProject: [],
      directsCosts: '',
      indirectsCosts: '',
      reportingMonth: '',
      reportingBudget: '',
    }
  }
}