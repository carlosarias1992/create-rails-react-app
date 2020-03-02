import { User } from "./user";

export interface UserWithStatus extends User {
  ok: boolean;
}
