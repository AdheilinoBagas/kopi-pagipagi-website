import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

const builder = imageUrlBuilder({projectId, dataset})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
