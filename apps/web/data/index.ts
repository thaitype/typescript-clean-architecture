"use server";

import { dbContext } from '../core/bootstrap';

export const fetchUsers = async () => {
  return dbContext.db.query.users.findMany();
};
