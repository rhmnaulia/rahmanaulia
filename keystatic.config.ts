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
    writings: collection({
      label: 'Writings',
      slugField: 'title',
      path: 'src/content/writings/*',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      schema: {
        cover: fields.image({
          label: 'Cover',
          description: 'The cover image for the writing',
          directory: 'public/assets/writings',
          publicPath: '/assets/writings',
          validation: {
            isRequired: false,
          },
        }),
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'The title of the writing',
            validation: {
              length: {
                min: 1,
              },
            },
          },
          slug: {
            // TODO: https://github.com/Thinkmill/keystatic/discussions/459
          },
        }),
        description: fields.text({
          label: 'Description',
          description: 'The description of the writing',
          validation: {
            length: {
              min: 1,
            },
          },
        }),
        publishedAt: fields.date({
          label: 'Published At',
          description: 'The date the writing was published',
          defaultValue: { kind: 'today' },
          validation: {
            isRequired: true,
          },
        }),
        updatedAt: fields.date({
          label: 'Updated At',
          description: 'The date the writing was updated',
          validation: {
            isRequired: false,
          },
        }),
        draft: fields.checkbox({
          label: 'Mark as draft',
          description:
            'If enabled, the writing will not be listed on the site but can still be accessed via the URL',
          defaultValue: false,
        }),
        redirect: fields.conditional(
          fields.checkbox({
            label: 'Redirect to external URL',
            description:
              'If enabled, the writing will redirect to an external URL',
            defaultValue: false,
          }),
          {
            false: fields.empty(),
            true: fields.object({
              url: fields.url({
                label: 'Redirect URL',
                description: 'The URL to redirect to',
                validation: {
                  isRequired: true,
                },
              }),
            }),
          }
        ),
        content: fields.document({
          label: 'Content',
          description: 'The content of the writing',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/assets/writings',
            publicPath: '/assets/articles',
          },
          layouts: [[1], [1, 1], [1, 2], [2, 1]],
        }),
      },
      previewUrl: `${process.env.APP_URL}/writings/{slug}`,
    }),
  },
})
