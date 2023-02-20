import imageUrlBuilder from '@sanity/image-url';
import {ImageUrlBuilder} from '@sanity/image-url/lib/types/builder';

const BREAKPOINTS = [640, 768, 1024, 1280, 1536]; // px
export function findLastNonNullValue(items: any[], currentIndex: any) {
  const sliced = items.slice(0, currentIndex);
  return sliced?.filter((val) => val !== null).pop();
}

const generateSrcSet = (
  urlBuilder: ImageUrlBuilder,
  breakpoints: any[],
  {quality, aspectRatio}: {quality: any; aspectRatio: number | undefined},
) => {
  return breakpoints
    .map((width) => {
      let url = urlBuilder.width(width).auto('format').quality(quality);
      if (aspectRatio) {
        url = url.height(Math.round((width / aspectRatio) * 100) / 100);
      }
      return `${url} ${width}w`;
    })
    .join(', ');
};

// Generate srcset sizes based off breakpoints
const generateSizes = (breakpoints: number[], sizes: string | any[]) => {
  if (!sizes) {
    return undefined;
  }

  if (typeof sizes === 'string') {
    return sizes;
  }

  if (sizes.length === 1 && sizes[0] !== null) {
    return sizes[0] + 'px';
  }

  return sizes
    .map((val, i) => {
      if (i === sizes.length - 1) {
        return sizes[i] + 'px';
      }

      let current = val;
      if (val === null) {
        current = findLastNonNullValue(sizes, i);
      }

      return `(max-width: ${breakpoints?.[i]}px) ${current}px`;
    })
    .join(', ');
};

/**
 * A simple image component that wraps around `@sanity/image-url`
 */
type SanityImageProps = {
  crop?: any;
  dataset?: any;
  height?: any;
  hotspot?: any;
  layout?: any;
  objectFit?: any;
  options?: any;
  projectId?: any;
  quality?: 80 | undefined;
  sizes?: any;
  src?: any;
  width?: any;
  [x: string]: any;
};

export function SanityImage(props: SanityImageProps) {
  const {
    // blurDataURL,
    crop,
    dataset,
    height,
    hotspot,
    layout,
    objectFit,
    options,
    projectId,
    quality = 80,
    sizes,
    src,
    width,
    ...rest
  } = props;

  if (!dataset) {
    throw new Error('SanityImage is missing required "dataset" property.');
  }
  if (!projectId) {
    throw new Error('SanityImage is missing required "projectId" property.');
  }
  if (!src) {
    return null;
  }

  // Strip out blacklisted props
  delete rest?.['decoding'];
  delete rest?.['ref'];
  delete rest?.['srcSet'];
  delete rest?.['style'];

  const urlBuilder = imageUrlBuilder({projectId, dataset}).image({
    _ref: src,
    crop,
    hotspot,
  });

  // Determine image aspect ratio (factoring in any potential crop)
  let aspectRatio;
  if (height && width) {
    const multiplierWidth = 1 - (crop?.left || 0) - (crop?.right || 0);
    const multiplierHeight = 1 - (crop?.bottom || 0) - (crop?.top || 0);
    aspectRatio = (width * multiplierWidth) / (height * multiplierHeight);
  }

  // Generate srcset + sizes
  const srcSetSizes = generateSizes(BREAKPOINTS, sizes);
  const currSizes = Array.isArray(sizes) ? sizes : BREAKPOINTS;
  const srcSet = generateSrcSet(urlBuilder, currSizes, {
    quality,
    aspectRatio,
  });

  let urlDefault = urlBuilder;

  // Apply props

  // if (options?.height) {
  //   urlDefault = urlDefault.height(options.height);
  // }
  if (width) {
    urlDefault = urlDefault.width(width);
  }

  // TODO: check for valid range
  if (options?.blur) {
    urlDefault = urlDefault.blur(options.blur);
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...rest}
      decoding="async"
      sizes={srcSetSizes}
      src={urlDefault.url()}
      srcSet={srcSet}
      style={{
        ...(layout === 'fill' && {
          bottom: 0,
          height: '100%',
          left: 0,
          objectFit,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
        }),
        ...(layout === 'responsive' && {
          aspectRatio,
          width: '100%',
        }),
      }}
    />
  );
}
