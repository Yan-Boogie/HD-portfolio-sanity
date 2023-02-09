// @ts-check
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        defineField({
            name: 'preview',
            title: 'Preview',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'videoSource',
            title: 'Video Source',
            type: 'url',
            description: 'Only Vimeo url is accepted',
        }),
    ]
})
