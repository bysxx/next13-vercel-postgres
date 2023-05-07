// eslint-disable-next-line
import { NextResponse } from 'next/server';

import { createPost, getPosts } from './model';

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  createPost(body.contents);

  const posts = await getPosts();
  return NextResponse.json(posts);
}
