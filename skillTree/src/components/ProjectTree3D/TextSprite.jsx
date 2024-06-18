
// src/components/TextSprite.jsx
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';

const TextSprite = ({ position, text }) => {
  const canvas = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    context.font = 'Bold 24px Arial';
    context.fillStyle = 'rgba(255,255,255,0.95)';
    context.fillText(text, 0, 24);
    return canvas;
  }, [text]);

  const texture = useMemo(() => new THREE.CanvasTexture(canvas), [canvas]);

  return (
    <mesh position={position}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default TextSprite;

