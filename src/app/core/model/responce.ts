export interface BackEndResponse<T> {

  data?: Array<T>;
  message: string;
  timestamp: Date;
}

