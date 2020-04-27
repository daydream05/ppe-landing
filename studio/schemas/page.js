export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title'
      }
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'section' }, { type: 'heroWithJustBlock'}, { type: 'heroBasic'} ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    },
    {
      name: 'settings',
      title: 'Settings',
      type: 'pageSettings'
    },
    {
      name: 'relatedPages',
      title: 'Related Pages',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'page' },
          { type: 'post' }
        ]
      }]
    }
  ]
}
