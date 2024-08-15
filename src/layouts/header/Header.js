import React from 'react';
import styles from './Header.module.scss';
// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1>TS Book</h1>
      </header>
    </div>
  );
}

