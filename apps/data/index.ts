"use server";

import { db } from "@thaitype-com/database";

export const fetchPosts = async () => {
  return db.query.posts.findMany();
};
