import type { ConnectOptions } from 'mongoose';

export interface AppConfig {
  mongo: {
    uri: string;
    options?: ConnectOptions;
  };
}
