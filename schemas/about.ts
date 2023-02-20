// @ts-check
import { defineField, defineType } from 'sanity';
import { BsFillPersonFill as icon } from 'react-icons/bs';

export default defineType({
    name: 'about',
    title: 'About',
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
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gmail',
            title: 'Gmail',
            type: 'string',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
        }),
        defineField({
            name: 'linkedIn',
            title: 'LinkedIn',
            type: 'string',
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'string',
        }),
        defineField({
            name: 'vimeo',
            title: 'Vimeo',
            type: 'string',
        }),
        defineField({
            name: 'behance',
            title: 'Behance',
            type: 'string',
        }),
    ],
});
