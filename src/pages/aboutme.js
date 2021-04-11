/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid"

import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


export default function Home() {

  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <header >
      </header>
      <main>

        <div className={styles.aboutMeContainer} >
          <div className={styles.aboutMeContainerElement}>
            <a href="https://www.linkedin.com/in/kgherr">
              <img className={styles.logoImage} src={"img/logos/linkedin-brands.svg"} />
            </a>
          </div>
          <div className={styles.aboutMeContainerElement}>
            <a href="https://github.com/ArzelaAscoIi">
              <img className={styles.logoImage} src={"img/logos/github-brands.svg"} />
            </a>
          </div>
          <div className={styles.aboutMeContainerElement}>
            <a href="https://instagram.com/k_hermn">
              <img className={styles.logoImage} src={"img/logos/instagram-brands.svg"} />
            </a>
          </div>
        </div>
      </main>
    </Layout >
  );
}
