import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Check if device is touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const variant = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorVariant(variant || 'hover');
        setCursorText(text);
        setIsHovered(true);
      } else {
        const interactive = e.target.closest('a, button, input, textarea, select, [role="button"]');
        if (interactive) {
          setCursorVariant('interactive');
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorVariant('default');
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'rgba(99, 102, 241, 0.4)',
      border: '1px solid rgba(99, 102, 241, 0.8)',
    },
    interactive: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      border: '1.5px solid rgba(139, 92, 246, 0.9)',
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(6, 182, 212, 0.9)',
      border: 'none',
      color: '#070709',
    },
    magnetic: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(236, 72, 153, 0.3)',
      border: '1px solid rgba(236, 72, 153, 0.8)',
    }
  };

  const currentVariant = variants[cursorVariant] || variants.interactive;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-bold text-xs uppercase tracking-wider backdrop-blur-[2px] transition-colors duration-200"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        border: currentVariant.border,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="text-[10px] font-black tracking-widest text-slate-950"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
