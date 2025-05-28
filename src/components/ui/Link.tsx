import { ReactNode, FC } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export const Link: FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  target, 
  rel 
}) => {
  return (
    <a 
      href={href} 
      className={`font-medium relative overflow-hidden group ${className}`}
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};