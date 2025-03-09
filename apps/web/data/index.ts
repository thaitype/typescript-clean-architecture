"use server";

import { db } from "@thaitype-com/database";

export const fetchUsers = async () => {
  return db.query.users.findMany();
};
