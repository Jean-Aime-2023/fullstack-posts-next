'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  try {
    await prisma.post.create({
      data: {
        title,
        body,
      },
    });

    revalidatePath('/posts');

    return { success: true }; // Return success response
  } catch (error) {
    console.error('Error creating post:', error);
    return { success: false }; // Return failure response
  }
}
