import type {SerializeFrom} from '@shopify/remix-oxygen';

import {SanitySection} from '~/types';

import Section from './Section';

export function Sections({
  sections,
}: {
  sections?: SerializeFrom<SanitySection[]>;
}) {
  return (
    <div className="w-full">
      {sections?.map((section) => (
        <Section key={section._key} section={section} />
      ))}
    </div>
  );
}
