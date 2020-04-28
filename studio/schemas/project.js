export default {
  name: 'project',
  title: 'Project',
  type: 'document',
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
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'projectMember' }]
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime'
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'company' }]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        list: [
          { title: 'Website', value: 'website'},
          { title: 'UX/Ui ', value: 'ux/ui'},
          { title: 'Video', value: 'video'},
        ]
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }]
    },
    {
      name: 'pageSettings',
      title: 'Page settings',
      type: 'pageSettings'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'mainImage'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
