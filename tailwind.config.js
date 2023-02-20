/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // TODO: delete these
        primary: withOpacityValue('--color-primary'),
        contrast: withOpacityValue('--color-contrast'),
        notice: withOpacityValue('--color-accent'),

        /* Whites */
        white: withOpacityValue('--color-white'),
        offWhite: withOpacityValue('--color-off-white'),
        light: withOpacityValue('--color-bleached-silk'),

        /* Blacks */
        black: withOpacityValue('--color-black'),
        dark: withOpacityValue('--color-eerie-black'),

        /* Greys */
        davys: withOpacityValue('--color-davys-grey'),

        /* Greens */
        olive: withOpacityValue('--color-black-olive'),
        camo: withOpacityValue('--color-rifle-green'),
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: [
          'PPMori',
          'Helvetica Neue',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
      },
      fontSize: {
        // Dispaly
        d9: ['4.5rem', {lineHeight: '0.9', fontWeight: '600'}],
        d8: ['3.75rem', {lineHeight: '0.9', fontWeight: '600'}],
        d7: ['3rem', {lineHeight: '0.95', fontWeight: '600'}],
        d6: ['2.5rem', {lineHeight: '0.95', fontWeight: '600'}],
        d5: ['2.25rem', {lineHeight: '0.95', fontWeight: '600'}],
        d4: ['2rem', {lineHeight: '0.95', fontWeight: '600'}],
        d3: ['1.625rem', {lineHeight: '0.95', fontWeight: '600'}],
        // Heading
        h8: ['1.875rem', {lineHeight: '1.3', fontWeight: '500'}],
        h6: ['1.25rem', {lineHeight: '1.3', fontWeight: '600'}],
        h5: ['1.125rem', {lineHeight: '1.3', fontWeight: '600'}],
        h4: ['1rem', {lineHeight: '1.3', fontWeight: '600'}],
        h3: ['0.8125rem', {lineHeight: '1.5', fontWeight: '600'}],
        // Paragraph
        p9: ['2.75rem', {lineHeight: '1.3', fontWeight: '400'}],
        p8: ['1.875rem', {lineHeight: '1.3', fontWeight: '400'}],
        p4: ['1rem', {lineHeight: '1.6', fontWeight: '400'}],
        p3: ['0.8125rem', {lineHeight: '1.5', fontWeight: '400'}],
        p1: ['0.625rem', {lineHeight: '1.5', fontWeight: '400'}],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
