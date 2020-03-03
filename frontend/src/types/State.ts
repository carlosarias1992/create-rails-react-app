import { UserWithStatus } from "./UserWithStatus";

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
