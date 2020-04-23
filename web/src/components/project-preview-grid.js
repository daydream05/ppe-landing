import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

function ProjectPreviewGrid (props) {
  return (
    <section>
      <Container
        variant="container.large"
        sx ={{
          px: [4],
          [mediaQueries.lg]: {
            px: 6,
          }
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
            listStyle: `none`,
            margin: 0,
            p: 0,
            [mediaQueries.lg]: {
              gridTemplateColumns: '1fr 1fr 1fr'
            }
          }}
        >
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}>
                <ProjectPreview {...node} />
              </li>
            ))}
        </ul>
        {props.browseMoreHref && (
          <div>
            <Link to={props.browseMoreHref}>Browse more</Link>
          </div>
        )}
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
