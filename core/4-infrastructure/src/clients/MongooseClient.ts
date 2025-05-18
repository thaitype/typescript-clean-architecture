// src/infrastructure/database/MongooseClient.ts
import mongoose, { type ConnectOptions } from 'mongoose';

export class MongooseClient {
  constructor(
    private uri: string,
    private options?: ConnectOptions
  ) {}

  async connect(): Promise<void> {
    if (mongoose.connection.readyState >= 1) {
      console.log('✅ Already connected to MongoDB');
      return;
    }

    try {
      await mongoose.connect(this.uri, this.options);
      console.log('✅ Mongoose connected to', this.uri);
    } catch (error) {
      console.error('❌ Mongoose connection error:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (mongoose.connection.readyState > 0) {
      await mongoose.disconnect();
      console.log('🛑 Mongoose disconnected');
    }
  }

  getConnectionState(): number {
    return mongoose.connection.readyState;
  }
}
