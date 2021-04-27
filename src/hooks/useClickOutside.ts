import React from 'react';

type Input = {
  ref: React.MutableRefObject<any>;
  action?: () => void;
  disable?: boolean;
};

export default ({ ref, action, disable }: Input): void => {
  React.useEffect(() => {
    // Handle mouse click
    const listener = (event: MouseEvent) => {
      // If inside, return
      if (!action || !ref.current || ref.current.contains(event.target)) {
        return;
      }

      // If click outside
      action();
    };

    // Click listener
    if (!disable) {
      document.addEventListener('mousedown', listener);
    }

    return () => {
      if (!disable) {
        document.removeEventListener('mousedown', listener);
      }
    };
  }, [ref, action, disable]);
};
