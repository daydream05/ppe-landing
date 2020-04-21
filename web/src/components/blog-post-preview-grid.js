import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

/** @jsx jsx */
import { jsx, css } from 'theme-ui'

function BlogPostPreviewGrid (props) {
  return (
    <div
      sx={{
        mt: 3,
        mb: 4
      }}
    >
      {props.title && (
        <h2
          sx={{
            fontSize: 2,
            fontWeight: `normal`,
            textTransform: `uppercase`,
            letterSpacing: `4px`,
            my: 4,
          }}
        >
          {props.browseMoreHref ? (
            <Link
              to={props.browseMoreHref}
              sx={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              {props.title}
            </Link>
          ) : (
            props.title
          )}
        </h2>
      )}
      <ul
        sx={{
          margin: 0,
          padding: 0,
          listStyle: `none`,
          display: `grid`,
          gridTemplateColumns: [`1fr`, `1fr`, `1fr 1fr`, `1fr 1fr 1fr`],
          gridGap: 4,
        }}
      >
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div
          sx={{
            fontSize: 1,
            mt: 4,
            textAlign: 'right'
          }}
        >
          <Link
            to={props.browseMoreHref}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: `primary`,
              }
            }}
          >
            Browse more
          </Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
