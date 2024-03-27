export interface Recipe {
  _id: string;
  recipeName: string;
  imageUrl: string;
  ingredients: string[];
  difficulty: string;
  instructions: string;
  owner?: string;
  createdAt: Date;
  updatedAt: Date;
}
