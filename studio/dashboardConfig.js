export default {
  widgets: [
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
                  buildHookId: '62990614ee74cd0b946fbcca',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dwfmsv7b',
                  apiId: 'a606fd0a-402a-472a-ba2a-8fda19528341'
                },
                {
                  buildHookId: '629906143486fe11a4f450be',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j3t5mx7r',
                  apiId: '13210ab4-ce15-4506-a020-fbba5f347aa9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/localghost8000/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j3t5mx7r.netlify.app', category: 'apps'}
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
