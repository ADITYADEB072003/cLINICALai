export interface Message {
  sender: string;
  text: string;
  type: 'user' | 'bot';
}