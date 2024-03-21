export interface User {
  _id?: string;
  email: string;
  username: string;
  accessToken?: string;
  favorite: string[];
}

export interface FavoriteResponse {
  _id: string;
}

export interface UserProfile {
  _id: string;
  username: string;
  email: string;
  favorite: Recipe[];
}

interface Recipe {
  _id: string;
  recipeName: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  createdAt: Date;
  updatedAt: Date;
}
