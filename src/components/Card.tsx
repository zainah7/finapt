import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;