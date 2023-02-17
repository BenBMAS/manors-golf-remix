import {DocumentIcon} from '@sanity/icons';
import {validateSlug} from '../../utils/validateSlug';
import {PAGE_SECTIONS} from '../../constants';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'theme',
      title: 'Theme',
    },
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
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Slug
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
    },
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
      type: 'seo.page',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      active: 'active',
      seoImage: 'seo.image',
      title: 'title',
    },
    prepare(selection) {
      const {seoImage, title} = selection;

      return {
        media: seoImage,
        title,
      };
    },
  },
};
