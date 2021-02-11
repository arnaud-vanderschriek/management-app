export interface Tab {
    value:string,
}

export interface DataProject {
    projectName: string,
    projectCode: string,
    month: string,
    startDate: string,
    endDate: string,
}

export interface UsersList {
    id: string,
    firstname: string,
    lastname: string,
    username: string,
    organisation: string,
    email: string,
    password: string,
    phone: number,
    date: string,
    idProject: number,
    token: string,
    status: string,
}
