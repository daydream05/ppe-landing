const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    // `SanityPost` being the type name you want to extend
    SanityPost: {
      // `happiness` being the field name you want to add
      path: {
        // type is the _GraphQL_ type name, so you can do `String!` for "non-null string", `Int` for integer, `SanityCategory` for a document or object of type  `SanityCategory`.
        type: 'String',
        resolve (source, args, context, info) {
          const { slug } = source
          return `/blog/${slug.current}/`
        }
      }
    },
    SanityProject: {
      // `happiness` being the field name you want to add
      path: {
        // type is the _GraphQL_ type name, so you can do `String!` for "non-null string", `Int` for integer, `SanityCategory` for a document or object of type  `SanityCategory`.
        type: 'String',
        resolve (source, args, context, info) {
          const { slug } = source
          return `/project/${slug.current}/`
        }
      }
    },
    SanityPage: {
      // `happiness` being the field name you want to add
      path: {
        // type is the _GraphQL_ type name, so you can do `String!` for "non-null string", `Int` for integer, `SanityCategory` for a document or object of type  `SanityCategory`.
        type: 'String',
        resolve (source, args, context, info) {
          const { slug } = source
          if (slug.current === 'home') {
            return '/'
          }
          return `/${slug.current}/`
        }
      }
    }
  })
}

async function createBlogPostPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, path } = edge.node

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path: path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id }
    })
  })
}

async function createProjectPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityProject || {}).edges || []

  projectEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/project/${slug}/`

    reporter.info(`Creating project page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id }
    })
  })
}

async function createDefaultPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    let path

    if (slug === 'home') {
      path = '/'
    } else {
      path = `/${slug}/`
    }

    reporter.info(`Creating page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/page.js'),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  return Promise.all([
    createBlogPostPages(graphql, actions, reporter),
    createProjectPages(graphql, actions, reporter),
    createDefaultPages(graphql, actions, reporter)
  ])
}
