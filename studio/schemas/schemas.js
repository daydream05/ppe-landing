// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import category from './category'
import companyInfo from './companyInfo'
import figure from './figure'
import mainImage from './mainImage'
import page from './page'
import person from './person'
import post from './post'
import postAuthor from './postAuthor'
import project from './project'
import projectMember from './projectMember'
import seo from './seo'
import siteSettings from './siteSettings'
import slideshow from './slideshow'
import section from './section'
import heading from './heading'
import hero from './hero'
import pageSettings from './objects/pageSettings'
import button from './objects/button'
import textColumn from './objects/textColumn'
import media from './objects/media'
import video from './documents/video'
import image from './documents/image'
import specsTable from './objects/specsTable'
import photoGallery from './objects/photoGallery'
import heroWithJustBlock from './objects/heroWithJustBlock'
import blockHero from './blocks/blockHero'
import blockForHeroBasic from './blocks/blockForHeroBasic'
import heroBasic from './objects/heroBasic'
import dataTable from './objects/dataTable'
import company from './documents/company'
import heroWithImage from './objects/heroWithImage'
import menu from './documents/menu'
import menuItem from './objects/menuItem'
import socialMedia from './documents/socialMedia'
import buttonGroup from './objects/buttonGroup'
import spacer from './objects/spacer'
import card from './objects/card'
import sectionWithCards from './objects/sectionWithCards'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    blockHero,
    blockForHeroBasic,
    button,
    buttonGroup,
    card,
    category,
    company,
    companyInfo,
    dataTable,
    figure,
    heading,
    image,
    hero,
    heroBasic,
    heroWithImage,
    heroWithJustBlock,
    media,
    mainImage,
    menu,
    menuItem,
    page,
    pageSettings,
    person,
    post,
    photoGallery,
    postAuthor,
    project,
    projectMember,
    seo,
    section,
    sectionWithCards,
    socialMedia,
    siteSettings,
    slideshow,
    spacer,
    specsTable,
    textColumn,
    video
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
