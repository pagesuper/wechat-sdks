export interface Result<T> {
  status: 'ok' | 'error';
  code: string;
  message: string;
  data?: T;
}
