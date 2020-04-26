import React from 'react'
import { graphql, Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Container, Text } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      pageSettings {
        hideHeader
        headerLinkColor
      }
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      mainImage {
        asset {
          _id
          fluid(maxHeight: 1000, maxWidth: 2000) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 1000 })
      members {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
    projects: allSanityProject(limit: 1000, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          title
        }
        previous {
          id
          title
          path
        }
        next {
          id
          title
          path
        }
      }
    }
  }
`

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
  const { projects } = data

  const projectIndex = projects?.edges.find(({ node }) => node.id === project?.id)

  console.log(projectIndex)

  return (
    <Layout pageSettings={project?.pageSettings}>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
      {projectIndex?.next && (
        <div
          sx={{
            borderTop: `1px solid`,
            borderTopColor: `mute`
          }}
        >
          <Link
            to={projectIndex?.next?.path}
            sx={{
              textDecoration: `none`,
              color: `inherit`,
              display: `flex`,
              justifyContent: `center`,
              flexDirection: `column`,
              alignItems: `center`,
              textAlign: `center`,
              width: `100%`,
              py: [5, 5, 5, 5, 5],
              position: `relative`,
              overflow: `hidden`,
              transitionProperty: `transform`,
              p: {
                transitionDelay: `0.25s`
              },
              '&:hover': {
                '&::before': {
                  transform: `translateX(0)`,
                  transition: `0.5s ease-in-out`
                },
                p: {
                  color: `background`,
                  transitionDelay: `0.25s`
                }
              },
              '&::before': {
                content: '""',
                position: `absolute`,
                top: `0`,
                left: 0,
                width: `100%`,
                height: `100%`,
                backgroundColor: `text`,
                transform: `translateX(-100%)`,
                zIndex: -1,
                transition: `0.5s ease-in-out`,
                transitionProperty: `transform`,
              }
            }}
          >
            <Text
              as="p"
              sx={{
                fontSize: 5,
                fontWeight: `600`
              }}
            >
              Next project
            </Text>
            <Text as="p">{projectIndex?.next?.title}</Text>
          </Link>
        </div>
      )}
      {projectIndex?.previous && (
        <div
          sx={{
            borderTop: `1px solid`,
            borderTopColor: `mute`
          }}
        >
          <Link
            to={projectIndex?.previous?.path}
            sx={{
              textDecoration: `none`,
              color: `inherit`,
              display: `flex`,
              justifyContent: `center`,
              flexDirection: `column`,
              alignItems: `center`,
              textAlign: `center`,
              width: `100%`,
              py: [5, 5, 5, 5, 5],
              position: `relative`,
              overflow: `hidden`,
              transition: `0.5s ease-in-out`,
              transitionProperty: `transform`,
              p: {
                transitionDelay: `0.25s`
              },
              '&:hover': {
                '&::before': {
                  transform: `translateX(0)`,
                  transition: `0.5s ease-in-out`
                },
                p: {
                  color: `background`,
                  transitionDelay: `0.25s`
                }
              },
              '&::before': {
                content: '""',
                position: `absolute`,
                top: `0`,
                left: 0,
                width: `100%`,
                height: `100%`,
                backgroundColor: `text`,
                transform: `translateX(100%)`,
                zIndex: -1,
                transition: `0.5s ease-in-out`,
                transitionProperty: `transform`
              }
            }}
          >
            <Text
              as="p"
              sx={{
                fontSize: 5,
                fontWeight: `600`
              }}
            >
              Previous project
            </Text>
            <Text as="p">{projectIndex?.previous?.title}</Text>
          </Link>
        </div>
      )}
    </Layout>
  )
}

export default ProjectTemplate
