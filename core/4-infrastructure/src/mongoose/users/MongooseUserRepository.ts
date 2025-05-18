import type { IUserRepository } from '@thaitype.com/application';
import type { UserUseCaseArgs as Args, UserWithId } from '@thaitype.com/application';
import { MongooseUserModel } from './MongooseUserModel';
import mongoose from 'mongoose';

export class MongooseUserRepository implements IUserRepository {
  private toUserWithId(doc: Omit<UserWithId, 'id'> & { _id: mongoose.Types.ObjectId }): UserWithId {
    return {
      id: doc._id.toString(),
      email: doc.email,
      name: doc.name,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }

  async create(data: Args['create']['input']) {
    const doc = await MongooseUserModel.create(data);
    return this.toUserWithId(doc);
  }

  async getById(id: Args['getById']['input']['id']) {
    const doc = await MongooseUserModel.findById(id).lean();
    return doc ? this.toUserWithId(doc) : null;
  }

  async update(input: Args['update']['input']) {
    const doc = await MongooseUserModel.findByIdAndUpdate(input.id, input.data, { new: true }).lean();

    return doc ? this.toUserWithId(doc) : null;
  }

  async delete(id: Args['delete']['input']['id']) {
    const result = await MongooseUserModel.findByIdAndDelete(id);
    return !!result;
  }

  async list() {
    const docs = await MongooseUserModel.find().lean();
    return docs.map(this.toUserWithId);
  }

  async searchBy(criteria: Args['searchBy']['input']) {
    const docs = await MongooseUserModel.find(criteria).lean();
    return docs.map(this.toUserWithId);
  }

  async listWithPagination({ offset, limit }: Args['listWithPagination']['input']) {
    const docs = await MongooseUserModel.find()
      .skip(offset)
      .limit(limit + 1) // ← overfetch
      .lean();

    const hasNext = docs.length > limit;
    const items = hasNext ? docs.slice(0, limit) : docs;

    return {
      items: items.map(this.toUserWithId),
      offset,
      limit,
      hasNext,
    };
  }
}
