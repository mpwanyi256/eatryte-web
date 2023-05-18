export interface NavRoute {
  icon: string;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  total_points: number;
  comment_count: number;
  tags: Tag[];
  assignee: User;
}
