import { format } from 'date-fns'

export function cn(...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl(slug) {
  return `/blog/${slug.current || slug}/`
}

export function getPagePath(type, slug) {
  let url
  const pageSlug = slug?.current || slug

  if (type === `post`) {
    url = `/blog/${pageSlug}`
  } else if (type === `page`) {
    if (pageSlug === `home`) {
      url = `/`
    } else {
      url = `/${pageSlug}/`
    }
  } else if (type === `projects`) {
    url = `/projects/${pageSlug}/`
  } else {
    return url
  }

  return url
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source?.asset?._ref || source?.asset?._id }
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

const defaults = { nonTextBehavior: 'remove' }

export function blocksToText(blocks, opts = {}) {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}
