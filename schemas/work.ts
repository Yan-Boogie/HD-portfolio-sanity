// @ts-check
import { defineField, defineType } from 'sanity';
import { CgWorkAlt as icon } from 'react-icons/cg';

export default defineType({
    name: 'work',
    title: 'Work',
    type: 'document',
    icon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'workType',
            title: 'Work Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Motion', value: 'motion' },
                    { title: 'Illustration', value: 'illustration' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'section',
            title: 'Place Section',
            type: 'string',
            description: 'Choose the section to place the work. Choose `None` if it is an Illustration work',
            options: {
                list: [
                    { title: 'Carousel', value: 'carousel' },
                    { title: 'List', value: 'list' },
                    { title: 'None', value: 'none' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'overview',
            title: 'Work Overview',
            type: 'blockContent',
        }),
        defineField({
            name: 'cover',
            title: 'Cover',
            type: 'image',
            description: 'This field is only for `Illustration` type work',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            type: 'video',
            description: 'This field is only for `Motion` type work',
            name: 'Video',
        }),
    ],
})
