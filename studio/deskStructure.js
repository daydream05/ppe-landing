import S from '@sanity/desk-tool/structure-builder'
import EditIcon from 'part:@sanity/base/edit-icon'
import EyeIcon from 'part:@sanity/base/eye-icon'

import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'
import SeoPreview from './src/previews/seo/seo-preview'
import IframePreview from './src/previews/iframe/iframe-preview'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'project', 'siteSettings']

const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : null

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('project')
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
        .title('Blog posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Blog posts')
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
        ),
      S.listItem()
        .title('All Pages')
        .schemaType('page')
        .child(
          S.documentTypeList('page')
            .title('All pages')
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
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Companies')
        .schemaType('company')
        .child(S.documentTypeList('company').title('Companies')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
