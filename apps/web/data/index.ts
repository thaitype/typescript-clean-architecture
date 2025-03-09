"use server";

import { db } from "@acme/database";

export const fetchUsers = async () => {
  return db.query.users.findMany();
};
