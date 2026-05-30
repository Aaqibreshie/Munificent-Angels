'use server';

import { currentUser, clerkClient } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function assignStudentCourse(userId, course) {
  try {
    const user = await currentUser();

    // Verify the person making the request is an admin
    if (user?.publicMetadata?.role !== 'admin') {
      throw new Error('Unauthorized action. You must be an admin.');
    }

    // Await the client in Clerk v5+
    const client = await clerkClient();

    // Update the target user's metadata
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { course }
    });

    // Revalidate the page to show the updated data
    revalidatePath('/admin/students');
    return { success: true };
  } catch (error) {
    console.error('Failed to assign course:', error);
    return { success: false, error: error.message };
  }
}
