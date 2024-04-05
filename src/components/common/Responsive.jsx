import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children, minWidth = 1024 }) => {
  const isDesktop = useMediaQuery({ minWidth });
  return isDesktop ? children : null;
};

export const Mobile = ({ children, maxWidth = 1023 }) => {
  const isMobile = useMediaQuery({ maxWidth });
  return isMobile ? children : null;
};