import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
    <path
      fill='currentColor'
      d='M9.75 0C4.374 0 0 4.374 0 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S15.126 0 9.75 0m0 1.5A8.24 8.24 0 0 1 18 9.75 8.24 8.24 0 0 1 9.75 18 8.24 8.24 0 0 1 1.5 9.75 8.24 8.24 0 0 1 9.75 1.5M9 5.25V9H5.25v1.5H9v3.75h1.5V10.5h3.75V9H10.5V5.25z'
    />
  </svg>
);
export default SvgIcPlus;
