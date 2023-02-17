import {HomeIcon} from '@sanity/icons';
import {PAGE_SECTIONS} from '../../constants';
const TITLE = 'Home';

export default {
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Sections
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: PAGE_SECTIONS,
      group: 'content',
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    },
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Index',
        title: TITLE,
      };
    },
  },
};
