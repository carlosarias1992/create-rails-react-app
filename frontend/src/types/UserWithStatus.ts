import { User } from "./User";

export interface UserWithStatus extends User {
    ok: boolean;
}
