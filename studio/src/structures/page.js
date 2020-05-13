import S from '@sanity/desk-tool/structure-builder'
import { FaFile } from 'react-icons/fa'
import EditIcon from 'part:@sanity/base/edit-icon'
import EyeIcon from 'part:@sanity/base/eye-icon'

import SeoPreview from '../previews/seo/seo-preview'
import IframePreview from '../previews/iframe/iframe-preview'

const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : null

export const page = S.listItem()
  .title('Pages')
  .child(
    S.list()
      .title('page')
      .items([
        S.listItem()
          .title('All pages')
          .child(
            S.documentTypeList('page')
              .title('All pages')
              .schemaType('page')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('page')
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
          .title('Default Pages')
          .child(
            S.list()
              .title('Default Pages')
              .items([
                S.listItem()
                  .title('About')
                  .child(
                    S.editor()
                      .id('aboutPage')
                      .schemaType('page')
                      .documentId('about')
                  )
                  .icon(FaFile),
                S.listItem()
                  .title('Contact')
                  .child(
                    S.editor()
                      .id('contactPage')
                      .schemaType('page')
                      .documentId('contact')
                  )
                  .icon(FaFile)
              ])
          )
      ])
  )
