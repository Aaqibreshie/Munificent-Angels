import { defineField, defineType } from 'sanity';

export const courseType = defineType({
  name: 'course',
  title: 'Swift ITI Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Course Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 1 Year, 2 Years',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'string',
      description: 'e.g., 10th Pass, 12th Pass',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seats',
      title: 'Total Seats',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'duration',
    },
  },
});
