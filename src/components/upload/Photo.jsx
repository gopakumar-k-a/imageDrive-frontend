import React, { forwardRef } from 'react';

export const Photo = forwardRef(({ url, faded, style, ...props }, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    height: 200,
    width: '100%', 
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    ...style,
  };

  return <div ref={ref} style={inlineStyles} {...props} />;
});
