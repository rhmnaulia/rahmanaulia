import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    tags: collection({
      label: 'Tags',
      slugField: 'name',
      path: 'src/content/tags/*',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Name', validation: { isRequired: true } }),
      },
    }),
    authors: collection({
      label: 'Authors',
      slugField: 'name',
      path: 'src/content/authors/*',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Name' }),
        socmed_url: fields.url({
          label: 'Social Media URL',
          validation: { isRequired: true },
        }),
      },
    }),
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Publication Date',
          description:
            'Specify the date when this post is published or the event occurred.',
        }),
        authors: fields.array(
          fields.relationship({
            label: 'Authors',
            collection: 'authors',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Authors',
            itemLabel: (item) => item.value || 'Please include the authors!',
          }
        ),
        tags: fields.array(
          fields.relationship({
            label: 'Tags',
            collection: 'tags',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Tags',
            itemLabel: (item) => item.value || 'Please include the tags!',
          }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/site/images',
            publicPath: '/site/images',
            schema: {
              title: fields.text({
                label: 'Image Caption',
                description: 'Enter the caption for the image.',
              }),
            },
          },
        }),
      },
    }),
  },
})
