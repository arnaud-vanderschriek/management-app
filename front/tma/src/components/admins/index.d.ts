
export interface Tab {
    value:string,
}

export interface DataProject {
    projectName: string,
    projectCode: string,
    startDate: string,
    endDate: string,
    hours: string,
    budget: string,
    usersOnProject: string[],
    workPackagesOnProject: WorkPackages[],
    directsCosts: string,
    indirectsCosts: string,
    reportingMonth: string,
    reportingBudget: string,
}


export interface WorkPackages {
    value: string,
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
    checked: boolean,
}

export interface Wp {
    value: string,
}
