import { Box } from "@react-three/drei";

const Cube = () => {
  return (
    <Box scale={2}>
      <meshStandardMaterial attach="material" color="red" />
    </Box>
  );
};

export default Cube;
