import {ImageIcon} from '@sanity/icons';

export default {
  name: 'section.heroImage',
  title: 'Hero Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    // Image
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Caption
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Button
    {
      name: 'button',
      title: 'Button',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
    },
    // scroll down
    {
      name: 'scrollDown',
      title: 'Scroll Down',
      description:
        'Adds scroll down button and changes the layout to accomodate it',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'caption',
      subtitle: 'title',
    },
  },
};
