import React from 'react';

export function Grid({ children, columns }) {
  return (
    <div className={`grid grid-cols-${columns} gap-4 p-4`}>
      {children}
    </div>
  );
}
