export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Company logo',
      type: 'mainImage'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['https']
      })
    }
  ]
}