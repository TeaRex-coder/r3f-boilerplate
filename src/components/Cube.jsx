import { Box } from "@react-three/drei";

const Cube = () => {
  return (
    <Box>
      <meshStandardMaterial attach="material" color="red" />
    </Box>
  );
};

export default Cube;
