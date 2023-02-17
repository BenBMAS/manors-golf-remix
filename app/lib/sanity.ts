import {createClient} from '@sanity/client';
import config from '../../sanity.config';
export const sanityConfig = config;
export const sanityClient = createClient(config);
