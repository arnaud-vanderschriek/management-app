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
  projet: string,
  task: string,
  // bill: boolean,
  mon: string,
  tue: string,
  wed: string,
  thu: string,
  fri: string,
  sat: string,
  sun: string,
}