export interface Theme {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Test {
  id: string;
  themeId: string;
  title: string;
  description: string;
  status: 'draft' | 'published';
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Question {
  id: string;
  testId: string;
  text: string;
  weight: number;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  name: string;
}
