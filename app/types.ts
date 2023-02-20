import type {Image} from '@sanity/types';

import {Cart} from '@shopify/hydrogen/storefront-api-types';
// import type {
//   Collection,
//   Customer,
//   MailingAddress,
//   MailingAddressConnection,
//   MediaConnection,
//   Order,
//   OrderLineItemConnection,
//   Product,
//   ProductVariant,
//   ProductVariantConnection,
// } from '@shopify/hydrogen/storefront-api-types';
// import type {PartialDeep} from 'type-fest';

/**
 * Elements
 */

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export type SanityLinkExternal = {
  _key?: string;
  _type: 'linkExternal';
  target: '_blank' | '_self';
  to: string;
  title?: string;
};

export type SanityLinkInternal = {
  _key?: string;
  _type: 'linkInternal';
  documentType?: string;
  to: string;
  title?: string;
  target: '';
};

export interface SanityAssetImage extends Image {
  _type: 'image';
  altText?: string;
  blurDataURL: string;
  height: number;
  url: string;
  width: number;
}

/**
 * Objects
 */

export type SanityCollection = {
  _id: string;
  gid: string;
  handle: string;
  slug?: string;
  title: string;
  image?: string;
};

export type SanityMenu = {
  primary: SanityLink[];
  secondary: SanityLink[];
  desktop: SanityLink[];
};

export type SanityFooter = {
  collections: SanityCollection[];
  about: SanityLink[];
  support: SanityLink[];
  social: SanityLinkExternal[];
};

export type SanitySettings = {
  menu: SanityMenu;
  footer: SanityFooter;
};

export type LayoutData = SanitySettings & {
  shop: {
    id: string;
    name: string;
    description: string;
  };
  cart?: Promise<Cart>;
};

/**
 * Sections
 */

export type SanitySection = SanitySectionHeroImage;

export type SanitySectionHeroImage = {
  _key?: string;
  _type: 'section.heroImage';
  title: string;
  caption: string;
  scrollDown: boolean;
  button: SanityLink;
  image: SanityAssetImage;
};
