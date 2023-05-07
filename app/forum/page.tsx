import { getPosts } from '@api/forum/model';

import Form from './components/form';

export default async function ExamplePage() {
  const data = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-4 text-3xl">Forum</h1>
      <div className="flex gap-x-8">
        <Form />
        <ul className="bg-gray-100 p-4">
          {data.map((post) => (
            <li key={post.contents} className="border-b border-gray-200 py-2">
              {post.contents}
            </li>
          ))}
          <li className="pt-2 text-right text-gray-500">{data.length}개의 게시글</li>
        </ul>
      </div>
    </main>
  );
}
