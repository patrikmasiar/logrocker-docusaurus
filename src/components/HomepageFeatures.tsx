/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visible on development',
    image: '👨🏻‍💻',
    description: (
      <>
        All the logs are visible on development phase <code>NODE_ENV === "development"</code>
      </>
    ),
  },
  {
    title: "Invisible on production",
    image: '👻',
    description: (
      <>
        Once the evnironment is set to production, the logs are not working anymore
      </>
    ),
  },
  {
    title: 'Based on your environment',
    image: '⚙️',
    description: (
      <>
        The visibility of the logs is customizable by your environment setup
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div style={{ fontSize: 100 }}>
          {image}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
