import type { SystemMetadata } from './SystemMetadata';

export interface User extends SystemMetadata {
  id: string;
  email: string;
  name: string;
}
