import groq from 'groq';
import {IMAGE} from '~/queries/sanity/elements/image';
import {BUTTON} from '~/queries/sanity/elements/button';

export const SECTION_HERO_IMAGE = groq`
  _key,
  title,
  caption,
  image{
    ${IMAGE}
  },
  ${BUTTON}
`;
