import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const variants = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fade: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
};

export default function RevealSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 700,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, isVisible] = useScrollReveal();
  const v = variants[variant] || variants.fadeUp;

  return (
    <Tag
      ref={ref}
      className={`${v.hidden} ${isVisible ? v.visible : ''} transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
