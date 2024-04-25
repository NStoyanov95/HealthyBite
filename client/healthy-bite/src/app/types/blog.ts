export interface BlogTheme {
  title: string;
  imageUrl: string;
  shortDescription: string;
  description: string;
}

export interface BLogThemeResponse extends BlogTheme {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
