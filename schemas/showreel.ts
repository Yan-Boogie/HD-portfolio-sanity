import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'

export default defineType({
    name: 'showreel',
    title: 'Showreel',
    type: 'document',
    icon,
    fields: [
        defineField({
            type: 'video',
            name: 'Video',
        }),
    ],
})
