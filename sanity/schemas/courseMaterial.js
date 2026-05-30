import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'courseMaterial',
  title: 'Course Material',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the material (e.g., "Chapter 1: Wiring Basics")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of what this material contains.',
    }),
    defineField({
      name: 'course',
      title: 'Course Tag',
      type: 'string',
      description: 'The course this material belongs to (must match the tag assigned to students in Clerk, e.g., "electrician").',
      options: {
        list: [
          { title: 'Electrician', value: 'electrician' },
          { title: 'Plumber', value: 'plumber' },
          { title: 'Computer Operator', value: 'computer' },
          { title: 'Stenography', value: 'steno' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'PDF/Document File',
      type: 'file',
      description: 'Upload a PDF or document here. (Optional if providing a link below)',
      options: {
        storeOriginalFilename: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'External Video or Link',
      type: 'url',
      description: 'Provide an external link (like a YouTube video). (Optional if uploading a file above)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'course',
    },
  },
});
