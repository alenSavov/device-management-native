export interface IDevice {
  id: string;
  make?: string;
  model?: string;
  state?: boolean;
  occupiedBy?: string;
}

export interface IUser {
  id: string;
  displayName: string;
  photoURL: string;
  email: string;
  phoneNumber: number;
}

interface ICurrentUser {
  uid: string;
  roles: string[];
}

export type CurrentUser = ICurrentUser | null;

export interface IState {
  users: IUser[];
  currentUser: CurrentUser;
  devices: IDevice[];
}

export interface IContextState {
  state: IState;
  dispatch: any;
}
