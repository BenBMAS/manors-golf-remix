import groq from 'groq';
import {LINK_EXTERNAL} from '~/queries/sanity/elements/linkExternal';
import {LINK_INTERNAL} from '~/queries/sanity/elements/linkInternal';
export const BUTTON = groq`
  "button": button[0] {
    (_type == 'linkExternal') => {
      ${LINK_EXTERNAL}
    },
    (_type == 'linkInternal') => {
      ${LINK_INTERNAL}
    },
  },
`;
