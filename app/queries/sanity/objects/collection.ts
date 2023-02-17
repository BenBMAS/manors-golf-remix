import groq from 'groq';

export const COLLECTION = groq`
  _id,
  "handle": store.slug.current,
  "gid": store.gid,
  "slug": "/collections/" + store.slug.current,
  "title": store.title,
  "image": store.imageUrl
`;
