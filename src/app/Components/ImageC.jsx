import React from 'react'
// import image from '';
export default function ImageC({ imageUrl, children ,width,height}) {
    return (
      <div style={{
        backgroundImage: `url(/${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        width:width,
        height:height,
        
        
      }}>
        {children}
      </div>
    );
  }
  