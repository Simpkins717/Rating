import React from 'react';

const Avatar = ({ className, style, image, alt, width }) => {
  return (
    <div>
      <img
        src={image}
        alt={alt}
        style={{ width: width, height: width }}
        className={className}
      />
    </div>
  );
};

export default Avatar;
