/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Built from parts availiable at the hardware store',
    imageUrl: 'img/plane_logo2.png',
    description: (
      <>
        The core frame is designed with parts that are available in the hardware store. The basic material used is XPS, aluminum, hot glue and partly wood.
      </>
    ),
  },
  {
    title: 'Autopilot',
    imageUrl: 'img/ardupilot.png',
    description: (
      <>
        The central computing unit consists of a Raspberry pi and a Navio2 with ardupilot and ROS. This controls both the waypoint mission and eventually the automated landing on water.
      </>
    ),
  },
  {
    title: 'Solar powered (upcoming)',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        The flight time is maximized by solar cells on the wings, which charge the duck's batteries both when resting on the lake and in the air.
      </>
    ),
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)} >

        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Learn more
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout >
  );
}
