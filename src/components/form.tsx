'use client'

import { createPost } from '@/actions/actions';
import { useRef } from 'react';


export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await createPost(formData);

    if (response.success) {
      formRef.current?.reset(); // Clear the form
    } else {
      // Handle failure (e.g., show an error message)
      console.error('Failed to create post');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for new post"
        required
        className="border rounded px-3 focus:outline-blue-500 h-10"
      />
      <textarea
        name="body"
        placeholder="Post Description"
        className="border rounded px-3 py-2 focus:outline-blue-500"
        rows={6}
        required
      ></textarea>
      <button type="submit" className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  );
}
