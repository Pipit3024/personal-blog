// src/components/SocialMediaLinks.js
import React from 'react';
import Image from 'next/image';

const SocialMediaLinks = () => {
  return (
    <div className="ml-6 space-x-4 flex">
      <a href="https://www.instagram.com/pipitwulandari_06/" target="_blank" rel="noopener noreferrer">
        <Image src="/instagram-icon.jpg" alt="Instagram" width={32} height={32} />
      </a>
      <a href="https://github.com/Pipit3024" target="_blank" rel="noopener noreferrer">
        <Image src="/github-icon.jpg" alt="GitHub" width={32} height={32} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
