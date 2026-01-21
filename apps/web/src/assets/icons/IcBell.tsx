import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcBell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={20} height={24} fill='none' {...props}>
    <path
      fill='currentColor'
      d='M10 0C8.895 0 8 .895 8 2c0 .086.02.168.031.25C4.574 3.133 2 6.273 2 10v6.611c0 .567-.434 1-1 1H0v2h7.188a3 3 0 0 0-.188 1c0 1.645 1.355 3 3 3s3-1.355 3-3a3 3 0 0 0-.187-1H20v-2h-1c-.566 0-1-.433-1-1v-6.33c0-3.758-2.512-7.11-6.031-8.031.011-.082.031-.164.031-.25 0-1.105-.895-2-2-2m-.437 4c.144-.012.289 0 .437 0h.188C13.453 4.098 16 6.96 16 10.281v6.33c0 .352.074.684.188 1H3.813a3 3 0 0 0 .187-1V10a6.005 6.005 0 0 1 5.563-6M10 19.612c.563 0 1 .437 1 1s-.437 1-1 1-1-.438-1-1 .438-1 1-1'
    />
  </svg>
);
export default SvgIcBell;
