import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Button, Box } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // Background animation with increased height & smoother filling
  const props = useSpring({
    to: { height: `${Math.min(100, count * 3)}%` }, // Slower fill rate for more increments
    config: { tension: 200, friction: 30 }, // Bézier curve effect
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "500px", // Increased height for more increments
        border: "2px solid black",
        overflow: "hidden",
        textAlign: "center",
        marginTop: "60px",
        borderRadius: "10px", // Slightly rounded for aesthetics
      }}
    >
      {/* Animated background filling effect */}
      <animated.div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "linear-gradient(to top, #3498db, #85c1e9)",
          ...props,
        }}
      />

      {/* Counter Content */}
      <Box sx={{ position: "relative", zIndex: 1, padding: "20px" }}>
        <h2>Counter: {count}</h2>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </Button>
          <Button variant="contained" onClick={() => setCount((prev) => prev - 1)}>
            Decrement
          </Button>
          <Button variant="contained" color="error" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
