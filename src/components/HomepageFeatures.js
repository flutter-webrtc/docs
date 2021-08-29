import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      id: 'homepage.features.modern-and-simple.title',
      message: 'Modern and Simple',
      description: 'Title of features on the home page',
    }),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="homepage.features.modern-and-simple.description"
        description="Description of features on the home page">
        Use the Flutter cross-platform framework to make WebRTC/VoIP application
        development easier. Less code, more beautiful apps.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.one-codebase-simple.title',
      message: 'One Codebase, Multi-Platforms',
      description: 'Title of features on the home page',
    }),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="homepage.features.one-codebase.description"
        description="Description of features on the home page">
        Support Mobile (iOS, Android), Desktop(Windows, macOS, Linux) and Web,
        even Embedded.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.standardized-integeratable-simple.title',
      message: 'Standardized and Integratable',
      description: 'Title of features on the home page',
    }),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="homepage.features.standardized-integeratable.description"
        description="Description of features on the home page">
         Standardized WebRTC API packaging and interoperability support.
        Just reference the docs can be interoperable with your WebRTC/SIP service.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
