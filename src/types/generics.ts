export interface Column {
  id: number;
  name: string;
}

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

export interface Comment {
  id: number;
  content: string;
  author: User;
  dateAdded: number;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  total_points: number;
  column_id: number;
  tags: Tag[];
  assignee: User;
}

export interface DocumentElement {
  readonly DOMElement: Document;
}

export interface MoveCardPayload {
  card: Card;
  from_column: Column;
  to_column_id: number;
}

export interface AddCardPayload {
  title: string;
  description: string;
}

// Global App config
export interface AppConfig {
  api: {
    baseURL: string;
    port: number;
  };
  app: {
    name: string;
    baseUrl: string;
    version: string;
  };
}
