import { sql } from '@vercel/postgres';

// Create Table
// await client.sql`CREATE TABLE Posts ( Contents varchar(255) );`;

interface Post {
  contents: string;
}

export async function getPosts(): Promise<Post[]> {
  const { rows } = await sql<Post>`SELECT * from Posts;`;

  return rows;
}

export async function createPost(contents: string) {
  await sql`INSERT INTO Posts (Contents) VALUES (${contents});`;
}
