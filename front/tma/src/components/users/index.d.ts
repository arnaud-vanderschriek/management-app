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
  Project: string,
  Task: string,
  Bill: boolean,
  Mon: string,
  Tue: string,
  Wed: string,
  Thu: string,
  Fri: string,
  Sat: string,
  Sun: string,
}