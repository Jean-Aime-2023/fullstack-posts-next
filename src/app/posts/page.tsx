import Form from '@/components/form';
import PostsList from '@/components/posts-list';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl sm:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
}
