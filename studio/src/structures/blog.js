import S from '@sanity/desk-tool/structure-builder'
import EditIcon from 'part:@sanity/base/edit-icon'
import EyeIcon from 'part:@sanity/base/eye-icon'

import SeoPreview from '../previews/seo/seo-preview'
import IframePreview from '../previews/iframe/iframe-preview'

const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : null

export const blog = S.listItem()
  .title('Blog posts')
  .schemaType('post')
  .child(
    S.list()
      .title('/blog')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('post')
          .child(
            S.documentTypeList('post')
              .title('Published posts')
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([
                    S.view.form().icon(EditIcon),
                    S.view
                      .component(SeoPreview)
                      .options({ previewURL })
                      .title('SEO Preview')
                      .icon(EyeIcon),
                    S.view
                      .component(IframePreview)
                      .options({ previewURL })
                      .title('Web Preview')
                      .icon(EyeIcon)
                  ])
              )
          ),
        S.listItem()
          .title('Work in progress')
          .child(
            S.documentTypeList('post')
              .title('WIP')
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "post" && (_id in path("drafts.**"))')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([
                    S.view.form().icon(EditIcon),
                    S.view
                      .component(SeoPreview)
                      .options({ previewURL })
                      .title('SEO Preview')
                      .icon(EyeIcon),
                    S.view
                      .component(IframePreview)
                      .options({ previewURL })
                      .title('Web Preview')
                      .icon(EyeIcon)
                  ])
              )
          )
      ])
  )
