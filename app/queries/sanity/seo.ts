import groq from 'groq';

export const SEO = groq`
  "seo": {
    "description": seo.description,
    "image": coalesce(seo.image, store, featuredImage) {
      "altText": coalesce(asset->altText, title),
      'height': asset->metadata.dimensions.height,
      'url': coalesce(asset->url, previewImageUrl, imageUrl),
      'width': asset->metadata.dimensions.width,
    },
    "title": coalesce(seo.title, store.title, title),
  }
`;
