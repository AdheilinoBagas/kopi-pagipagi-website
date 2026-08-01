export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`
export const HERO_QUERY = `*[_type == "heroSection"][0]`
export const ABOUT_QUERY = `*[_type == "aboutSection"][0]`
export const PRODUCTS_QUERY = `*[_type == "product" && status == "active"] | order(order asc){
  ...,
  category->{name, slug}
}`
export const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc)`
export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc)`
export const GALLERY_QUERY = `*[_type == "galleryItem"] | order(order asc)`
export const CONTACT_QUERY = `*[_type == "contactSection"][0]`
