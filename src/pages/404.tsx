import React, {ReactElement, useEffect} from 'react';
import {useRouter} from 'next/router';

export default function NotFoundPage(): ReactElement {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await router.replace('/');
    })();
  }, [router]);

  return <></>;
}
