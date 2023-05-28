export interface UserState {
  isLoggedIn: boolean;
  userData: { username: string | null; password: string | null };
}
