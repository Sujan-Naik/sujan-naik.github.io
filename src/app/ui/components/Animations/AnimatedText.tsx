// components/AnimatedText.tsx
import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number; // Optional delay for the animation
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  const characters = text.split('');

  return (
    <p>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }} // Starting Animation
          animate={{ opacity: 1, y: 0 }}  // Ending Animation
          transition={{ delay: delay + index * 0.05 }} // Delay based on character index
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedText;