import { UserWithStatus } from "./userWithStatus";

export interface State {
  entities: {
    session: {
      currentUser?: UserWithStatus;
    };
  };
  errors: {
    session: string[];
  };
}
