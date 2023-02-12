export type TUser = {
    id: number;
    email: string;
    password: string;
    login: string;
    categories: [
        {
          value: string;
          color: string;
          id: string;
          task: []
        }
    ];
}
export type TCategories = {
    textCategory: string;
    color: string;
    id: string;
    tasks: [
       { 
          id: string,
          taskName: string,
          isStatus: string
        }
    ];
}


export type TFormValues = {
    login: string;
    email: string;
    password: string;
  };