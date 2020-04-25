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
          px: 0
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
            gridGap: 3,
            listStyle: `none`,
            margin: 0,
            p: 0,
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            overflow: `hidden`,
          }}
        >
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}
                sx={{
                  position: `relative`,
                  paddingTop: `100%`,
                }}
              >
                <div
                  sx={{
                    position: `absolute`,
                    width: `100%`,
                    height: `100%`,
                    top: 0,
                  }}
                >
                  <ProjectPreview {...node} />
                </div>
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
