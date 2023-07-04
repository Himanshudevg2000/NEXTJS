'use client';

import Link from 'next/link';
import React from 'react';

const header = () => {
  return (
    <nav>
      <Link href={'/'}> Home </Link>
      <Link href={'/about'}> About </Link>
      <Link href={'/contact'}> Contact </Link>
      <Link href={'/product/id'}> Product </Link>
    </nav>
  )
}

export default header;
