/* eslint-disable react/jsx-props-no-spreading */

import React, {ReactElement} from 'react';
import 'sass-reset';
import {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import {useApp} from '../app/hooks/use-app';
import {WithTheme} from '../app/components/with-theme/with-theme';
import {SEO} from '../constants';

// noinspection JSUnusedGlobalSymbols
export default function MyApp({Component, pageProps}: AppProps): ReactElement {
  useApp();

  return (
    <>
      <DefaultSeo {...SEO} />
      <WithTheme>
        <Component {...pageProps} />
      </WithTheme>
    </>
  );
}
