import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

function ProjectPreviewGrid (props) {
  return (
    <section
      sx={{
        px: 4,
        [mediaQueries.lg]: {
          px: 0
        }
      }}
    >
      <Container
        sx ={{
          maxWidth: `1082px`,
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
            gridGap: 3,
            listStyle: `none`,
            margin: 0,
            p: 0,
            gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
            gridTemplateRows: `repeat(9, 300px)`,
            overflow: `hidden`,
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
