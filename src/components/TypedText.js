import React, { useEffect, useRef } from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const TypedText = () => {
  const textRef = useRef(null);
  const timeoutRef = useRef(null);
  const textColor = useColorModeValue('blue.600', 'blue.300');

  useEffect(() => {
    const texts = [
      'a Penn State CS Student',
      'a Full-Stack Developer',
      'an AI Enthusiast',
      'a Problem Solver',
      'a Coffee Addict ☕',
    ];
    
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!textRef.current) return;

      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        textRef.current.textContent = currentText.substring(0, charIndex);
        charIndex--;
      } else {
        textRef.current.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = 120;

      if (isDeleting) {
        typeSpeed = 40;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      timeoutRef.current = setTimeout(type, typeSpeed);
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <span ref={textRef} style={{ color: textColor }} />;
};

export default TypedText; 