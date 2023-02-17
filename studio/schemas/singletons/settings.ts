import {CogIcon, PackageIcon} from '@sanity/icons';

const TITLE = 'Settings';

export default {
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'productOptions',
      title: 'Product options',
    },
    {
      name: 'notFoundPage',
      title: '404 page',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Menu
    {
      name: 'menu',
      title: 'Menu',
      type: 'object',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Primary Links
        {
          name: 'primary',
          title: 'Primary',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        },
        // Primary Links
        {
          name: 'secondary',
          title: 'Secondary',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        },
        // Primary Links
        {
          name: 'desktop',
          title: 'Desktop',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        },
      ],
    },
    // Footer
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Collections
        {
          name: 'collections',
          title: 'Collections',
          type: 'array',
          of: [
            {
              name: 'collection',
              title: 'Collection',
              type: 'reference',
              weak: true,
              to: [
                {
                  name: 'collection',
                  type: 'collection',
                },
              ],
            },
          ],
        },
        // About
        {
          name: 'about',
          title: 'About',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        },
        // Support
        {
          name: 'support',
          title: 'Support',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        },
        // Social
        {
          name: 'social',
          title: 'Social',
          type: 'array',
          of: [{type: 'linkExternal'}],
        },
      ],
    },
    // Custom product options
    {
      name: 'customProductOptions',
      title: 'Custom product options',
      type: 'array',
      group: 'productOptions',
      of: [
        {
          name: 'customProductOption.color',
          type: 'customProductOption.color',
        },
        {
          name: 'customProductOption.size',
          type: 'customProductOption.size',
        },
      ],
      validation: (Rule) =>
        Rule.custom((options) => {
          // Each product option type must have a unique title
          if (options) {
            const uniqueTitles = new Set(options.map((option) => option.title));
            if (options.length > uniqueTitles.size) {
              return 'Each product option type must have a unique title';
            }
          }
          return true;
        }),
    },
    // Not found page
    {
      name: 'notFoundPage',
      title: '404 page',
      type: 'object',
      group: 'notFoundPage',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 2,
        },
        {
          name: 'collection',
          title: 'Collection',
          type: 'reference',
          description: 'Collection products displayed on this page',
          weak: true,
          to: [
            {
              name: 'collection',
              type: 'collection',
            },
          ],
        },
      ],
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      description: 'Defaults for every page',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Site title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          validation: (Rule) =>
            Rule.max(150).warning(
              'Longer descriptions may be truncated by search engines',
            ),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      };
    },
  },
};
