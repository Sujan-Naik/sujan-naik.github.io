import React from 'react';
import Link, { LinkProps } from 'next/link';

interface PrimaryLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void; // Optional prop for additional click functionality
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <Link {...props} className={`link ${className} `}
        onClick={onClick}>

        {children}
    </Link>
  );
};

export default PrimaryLink;