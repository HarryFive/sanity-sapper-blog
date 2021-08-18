export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611ca577fb520f9c0a6729ea',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-nuo5tnyh',
                  apiId: '8a54cde4-4cc4-4e08-be4b-306c2514123a'
                },
                {
                  buildHookId: '611ca5777ed2f2ac05ed67f1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-w9gnwb5m',
                  apiId: '58e40924-2be1-4734-8b08-52c85e3b2f8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HarryFive/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-w9gnwb5m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
