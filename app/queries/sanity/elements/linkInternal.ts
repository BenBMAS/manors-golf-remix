import groq from 'groq';

export const LINK_INTERNAL = groq`
  _key,
  _type,
  title,
  ...reference-> {
    "documentType": _type,
    (_type == "collection") => {
      "to": "/collections/" + store.slug.current,
    },
    (_type == "home") => {
      "to": "/",
    },
    (_type == "page") => {
      "to": "/" + slug.current,
    },
    (_type == "post") => {
      "to": "/journal/" + slug.current,
    },
    (_type == "product" && store.isEnabled && store.status == "active") => {
      "to": "/products/" + store.slug.current,
    },
  }
`;
