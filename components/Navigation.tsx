'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navigation = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
      <Link href={'/'}>
        <h1 className="text-2xl uppercase text-white banner--text--purple cursor-pointer">
          Lucky Wheel
        </h1>
      </Link>
    </nav>
  );
};

export default Navigation;
