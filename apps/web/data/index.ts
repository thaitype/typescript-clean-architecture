"use server";

import { db } from "@acme/database-drizzle";

export const fetchUsers = async () => {
  return db.query.users.findMany();
};
