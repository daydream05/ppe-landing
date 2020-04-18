export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => [
        Rule.required(),
        Rule.max(160).warning('Shorter meta descriptions are better.')
      ]
    }
  ],
  options: {
    collapsible: true
  }
}
