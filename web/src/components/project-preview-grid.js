import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'

function ProjectPreviewGrid (props) {
  return (
    <section
      sx={{
        px: 4,
        [mediaQueries.lg]: {
          px: 0,
          pt: 5,
          pb: 6,
        }
      }}
    >
      <Container
        sx ={{
          maxWidth: breakpoints.lg,
        }}
      >
        {props.title && (
          <h2>
            {props.browseMoreHref ? (
              <Link to={props.browseMoreHref}>{props.title}</Link>
            ) : (
              props.title
            )}
          </h2>
        )}
        <ul
          sx={{
            display: 'grid',
            gridGap: 6,
            listStyle: `none`,
            margin: 0,
            p: 0,
          }}
        >
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}
                sx={{
                  position: `relative`,
                }}
              >
                <ProjectPreview {...node} />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
