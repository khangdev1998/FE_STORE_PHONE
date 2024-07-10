import React from 'react';
import './MembershipBadge.module.scss';
import styles from './MembershipBadge.module.scss';

function MembershipBadge({ type }) {
  const className = `${styles.badge} ${styles[`badge--${type.toLowerCase()}`]}`;
  const displayType = type === "Normal" ? "Thường" : type;
  
  return <span className={className}>{displayType}</span>;
}
export default MembershipBadge;
