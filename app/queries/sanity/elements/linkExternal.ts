import groq from 'groq';

export const LINK_EXTERNAL = groq`
  _key,
  _type,
  "target": select(newWindow => "_blank", "_self"),
  title,
  "to": url,
`;
