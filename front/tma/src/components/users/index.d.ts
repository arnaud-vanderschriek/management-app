export interface UserDataInterface {
  id: number,
  id_project: number,
  firstname: string,
  lastname: string,
  username: string,
  organisation: string,
  supervisor: string,
  legalhours: string,
  contracthours: string,
  email: string,
  start_date: string,
  end_date: string,
}

export interface UserProjectInterface {
  id: number,
  projectName: string,
  projectCode: string,
  startDate: string,
  endDate: string,
  month: string,
  // idProject: number,
}

export interface Array {
    lastname: string,
    firstname: string,
    start_date: string,
    end_date: string,
    legalhours: string,
    contracthours: string,
    email: string,
    organisation: string,
}

export interface TimeSheetDataInterface {
  userId: number,
  week: string,
  project: string,
  task: string,
  bill: Boolean,
  mon: string,
  tue: string,
  wed: string,
  thu: string,
  fri: string,
  sat: string,
  sun: string,
}

