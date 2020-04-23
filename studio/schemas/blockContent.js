import { FaExternalLinkAlt } from 'react-icons/fa'
import { CenterAlignRender } from '../src/renderers/decorators/center-align-render'
import { LeftAlignRender } from '../src/renderers/decorators/left-align-render'
import { RightAlignRender } from '../src/renderers/decorators/right-align-render'
import { MdFormatAlignLeft, MdFormatAlignRight, MdFormatAlignCenter } from 'react-icons/md'
import { SmallH2 } from '../src/renderers/styles/small-h2'
import { LargeH2 } from '../src/renderers/styles/large-h2'
import { Large } from '../src/renderers/styles/large'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Large', value: 'large', blockEditor: { render: Large } },
        { title: 'Small - H2', value: 'small.h2', blockEditor: { render: SmallH2 } },
        { title: 'Small - H3', value: 'small.h3' },
        { title: 'Large - H2', value: 'large.h2', blockEditor: { render: LargeH2 } },
        { title: 'Large - H3', value: 'large.h3' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Left Align',
            value: 'leftAlign',
            blockEditor: {
              icon: MdFormatAlignLeft,
              render: LeftAlignRender
            }
          },
          {
            title: 'Center Align',
            value: 'centerAlign',
            blockEditor: {
              icon: MdFormatAlignCenter,
              render: CenterAlignRender
            }
          },
          {
            title: 'Right Align',
            value: 'rightAlign',
            blockEditor: {
              icon: MdFormatAlignRight,
              render: RightAlignRender
            }
          }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'External Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel']
                  })
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              },
              {
                title: 'No follow',
                name: 'nofollow',
                description: 'Make this link no follow',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'figure'
    },
    {
      type: 'slideshow'
    },
    {
      type: 'textColumn'
    },
    {
      type: 'button'
    },
    {
      type: 'section'
    }
  ]
}
