import {useRef} from 'react';
import {Button, Text, Link} from '~/components';
import {SanityImage, HeroCaption} from '~/components/objects';
import {SanitySectionHeroImage} from '~/types';
import {sanityConfig} from '~/lib/sanity';
import type {SerializeFrom} from '@shopify/remix-oxygen';

export function HeroImage({
  section,
}: {
  section: SerializeFrom<SanitySectionHeroImage>;
}) {
  const {title, caption, image, button} = section;
  const height = 'full';
  const top = true;

  const nexSection = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        className={`relative flex w-full flex-col justify-end ${
          top && '-mt-nav'
        } ${
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]'
        }`}
      >
        <div className="content-stretch pointer-events-none absolute inset-0 -z-10 grid flex-grow auto-cols-fr grid-flow-col overflow-clip">
          <SanityImage
            // crop="top"
            width={2000}
            height={1000}
            objectFit="cover"
            dataset={sanityConfig.dataset}
            layout="fill"
            projectId={sanityConfig.projectId}
            sizes={[1000, 2000]}
            src={image?.asset?._ref}
          />
        </div>
        <div className="space-y-8 bg-gradient-to-t from-dark/40 px-6 py-8 text-light sm:px-8 md:px-12">
          <div className="flex flex-col items-end justify-between border-b border-white/50 pb-8 md:flex-row">
            {title && (
              <h2 className="max-w-lg text-d9 uppercase text-light">{title}</h2>
            )}
            {button && (
              <Button to={button.to} target={button?.target} width="auto">
                {button.title}
              </Button>
            )}
          </div>
          <div className="flex items-end justify-between gap-4">
            {caption && (
              <HeroCaption className="text-p3">{caption}</HeroCaption>
            )}
            {/* scroll down */}

            <button
              className="border-b border-light/60 text-p3"
              onClick={() =>
                nexSection.current?.scrollIntoView({behavior: 'smooth'})
              }
            >
              Scroll down
            </button>
          </div>
        </div>
      </section>
      <div ref={nexSection} />
    </>
  );
}
