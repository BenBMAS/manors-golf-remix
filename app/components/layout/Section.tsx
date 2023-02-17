import {HeroImage} from '~/components/sections';
import {SanitySection} from '~/types';
import type {SerializeFrom} from '@shopify/remix-oxygen';

type Props = {
  section: SerializeFrom<SanitySection>;
};

export default function Section({section}: Props) {
  switch (section._type) {
    case 'section.heroImage':
      return <HeroImage section={section} />;
    default:
      return null;
  }
}
