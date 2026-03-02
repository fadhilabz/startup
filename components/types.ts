// types.ts
export interface SubContent {
  id: string;
  type: 'text' | 'image' | 'code';
  value: string;
}

export interface ContentBlock {
  id: string;
  type: 'sub-chapter' | 'text' | 'list' | 'image' | 'code' | 'column' | 'quote' | 'callout';
  // JANGAN gunakan any. Gunakan ini:
  value: string | SubContent[][]; 
  language?: string;
  fileName?: string;
  author?: string;
  title?: string;
  listType?: 'ul' | 'ol';
}