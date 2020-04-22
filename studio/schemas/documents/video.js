import { MdVideoLibrary } from 'react-icons/md'

export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: MdVideoLibrary,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'url',
      title: 'Video URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
