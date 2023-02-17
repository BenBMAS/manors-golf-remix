import groq from 'groq';
import {SECTION_HERO_IMAGE} from './sections/heroImage';

export const SECTIONS = groq`
  _key,
  _type,
  (_type == "section.heroImage") => {
    ${SECTION_HERO_IMAGE}
  }
`;
