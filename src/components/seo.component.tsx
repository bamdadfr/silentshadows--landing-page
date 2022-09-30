import React, {ReactElement} from 'react';
import {NextSeo} from 'next-seo';
import {SEO} from '../constants';

interface SeoComponentProps {
  title?: string;
  description: string;
  canonical: string;
}

export function SeoComponent({
  title = '',
  description,
  canonical,
}: SeoComponentProps): ReactElement {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${SEO.canonical}${canonical}`}
        openGraph={{
          url: `${SEO.canonical}${canonical}`,
        }}
      />
      {/* {image && ( */}
      {/*  <NextSeo */}
      {/*    openGraph={{ */}
      {/*      images: [ */}
      {/*        { */}
      {/*          url: image.url, */}
      {/*        }, */}
      {/*      ], */}
      {/*    }} */}
      {/*  /> */}
      {/* )} */}
    </>
  );
}
