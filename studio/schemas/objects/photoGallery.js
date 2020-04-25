import { PhotoGallery } from "../../src/previews/portable-text-blocks/photo-gallery";

export default {
  name: 'photoGallery',
  title: 'Photo Gallery',
  type: 'object',
  fields: [
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{
        type: 'figure',
      }]
    },
    {
      name: 'targetRowHeight',
      title: 'Target row height',
      type: 'number',
      description: "Set this to change the row's height. The lower the number, the more images fit in a row. Defaults to 400px",
    },
    {
      name: 'margin',
      type: 'Margin',
      type: 'number',
      description: 'Margin between the images. Defaults to 8px. (A 16px gap)',
    }
  ],
  preview: {
    select: { photos: 'photos', margin: 'margin', targetRowHeight: 'targetRowHeight' },
    component: PhotoGallery,
  }
}