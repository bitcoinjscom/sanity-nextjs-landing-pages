export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eba22f9f30aa798b315502c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ev3ftzq1',
                  apiId: '2f48e989-b343-4ea5-8879-b6cc158bed5c'
                },
                {
                  buildHookId: '5eba22f9f30aa7c5c9155010',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6uoboyr8',
                  apiId: '9636691f-a269-4a0f-9745-3cc323fb5696'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bitcoinjscom/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6uoboyr8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
