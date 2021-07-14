import React from 'react';
import { Link } from 'react-router-dom';
/* import styled from 'styled-components'; */
/* import styles from './Button.module.css'; */

export default function Button({ btnText = 'test', btnLink = 'test' }) {
  return <Link to={btnLink}>{btnText}</Link>;
}
