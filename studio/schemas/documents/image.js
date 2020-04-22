import { MdPhotoLibrary } from 'react-icons/md'

export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  icon: MdPhotoLibrary,
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
      name: 'file',
      title: 'Image file',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}
