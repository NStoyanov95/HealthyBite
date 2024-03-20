export interface User {
  _id?: string;
  email: string;
  username: string;
  accessToken?: string;
  favorite: string[];
}

export interface FavoriteResponse {
  _id: string
}
