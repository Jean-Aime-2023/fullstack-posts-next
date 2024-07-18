import { createPost } from '@/actions/actions';

export default function Form() {
  return (
    <form
      action={createPost}
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
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  );
}
