import S from '@sanity/desk-tool/structure-builder'
import EditIcon from 'part:@sanity/base/edit-icon'
import EyeIcon from 'part:@sanity/base/eye-icon'

import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'
import SeoPreview from './src/previews/seo/seo-preview'
import IframePreview from './src/previews/iframe/iframe-preview'
import { page } from './src/structures/page'
import { blog } from './src/structures/blog'

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'person',
  'post',
  'project',
  'siteSettings',
  'menu'
]

const localURL = 'http://localhost:8000'
const gatsbyPreview = 'https://hungrygatsbydev-3775585431.gtsb.io/'
const previewURL = window.location.hostname === 'localhost' ? localURL : gatsbyPreview

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
        .title('Menu')
        .child(
          S.editor()
            .id('mainMenu')
            .schemaType('menu')
            .documentId('mainMenu')
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
      blog,
      page,
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Social media accounnts')
        .schemaType('socialMedia')
        .child(S.documentTypeList('socialMedia').title('Social media accounts')),
      S.listItem()
        .title('Companies')
        .schemaType('company')
        .child(S.documentTypeList('company').title('Companies')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
