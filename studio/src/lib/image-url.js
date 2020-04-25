import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
    projectId: '1ovn36xv',
    dataset: 'production'
})

export function imageUrlFor (source) {
  return builder.image(source)
}
