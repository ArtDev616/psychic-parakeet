import { useState, useEffect } from 'react';
import { breakpoints } from 'utils/style';

export enum SizeTypes {
  XLARGE = 'xl',
  MEDIUM = 'md',
  LARGE = 'l',
  XSMALL = 'xs'
}

export type Dimensions = { width: number; height: number, size: SizeTypes };

const getCurrentSizeUsingBreakpoints = (width: number): Dimensions['size'] => {
  if (width <= breakpoints.xs.js) {
    return SizeTypes.XSMALL;
  }

  if (width <= breakpoints.md.js) {
    return SizeTypes.MEDIUM;
  }

  if (width <= breakpoints.l.js) {
    return SizeTypes.LARGE;
  }

  return SizeTypes.XLARGE;
};

const getDimensions = (): Dimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  const size = getCurrentSizeUsingBreakpoints(width);

  return {
    width,
    height,
    size,
  };
};

export default (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>(getDimensions());

  useEffect(() => {
    const handle = () => {
      setDimensions(getDimensions());
    };

    window.addEventListener('resize', handle);

    return () => window.removeEventListener('resize', handle);
  }, []);

  return dimensions;
};
