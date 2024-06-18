
// src/ProjectTree3D.jsx
// src/components/ProjectTree3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TextSprite from './TextSprite';
import projects from '../projects/myProjects'; // Adjust path as per your project structure

const radius = 5;

const TreeNode = ({ position, name }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <TextSprite position={[0, 1, 0]} text={name} />
    </group>
  );
};

const Tree = ({ position }) => {
  const rootNodePosition = position;

  const renderTreeNodes = (node, parentPosition, level) => {
    const numChildren = node.children ? node.children.length : 0;
    const angleIncrement = (Math.PI * 2) / numChildren;

    return node.children ? node.children.map((child, index) => {
      const angle = angleIncrement * index;
      const childPosition = [
        parentPosition[0] + Math.cos(angle) * radius * (level + 1),
        parentPosition[1] - radius * (level + 1),
        parentPosition[2] + Math.sin(angle) * radius * (level + 1)
      ];

      return (
        <group key={child.name} position={parentPosition}>
          <TreeNode position={childPosition} name={child.name} />
          <line>
            <bufferGeometry attach="geometry" />
            <lineBasicMaterial attach="material" color="black" />
          </line>
          {renderTreeNodes(child, childPosition, level + 1)}
        </group>
      );
    }) : null;
  };

  return (
    <>
      <TreeNode position={rootNodePosition} name="Projects" />
      {projects.map((project) => renderTreeNodes(project, rootNodePosition, 1))}
    </>
  );
};

const ProjectTree3D = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Tree position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default ProjectTree3D;
