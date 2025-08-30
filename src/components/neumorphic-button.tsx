'use client';

import React from 'react';

interface NeumorphicButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NeumorphicButton({ href, children, className = '' }: NeumorphicButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`neumorphic-button ${className}`}
    >
      <div className="button-outer">
        <div className="button-inner">
          <span>{children}</span>
        </div>
      </div>
      
      <style jsx>{`
        .neumorphic-button {
          all: unset;
          cursor: pointer;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          position: relative;
          border-radius: 999vw;
          background-color: rgba(0, 0, 0, 0.75);
          box-shadow: -0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25),
              0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1);
          display: inline-block;
        }

        .neumorphic-button::after {
          content: "";
          position: absolute;
          z-index: 0;
          width: calc(100% + 0.3em);
          height: calc(100% + 0.3em);
          top: -0.15em;
          left: -0.15em;
          border-radius: inherit;
          background: linear-gradient(-135deg,
                  rgba(5, 5, 5, 0.5),
                  transparent 20%,
                  transparent 100%);
          filter: blur(0.0125em);
          opacity: 0.25;
          mix-blend-mode: multiply;
        }

        .button-outer {
          position: relative;
          z-index: 1;
          border-radius: inherit;
          transition: box-shadow 300ms ease;
          will-change: box-shadow;
          box-shadow: 0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1),
              0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5),
              0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25);
        }

        .neumorphic-button:hover .button-outer {
          box-shadow: 0 0 0 0 rgba(5, 5, 5, 1), 0 0 0 0 rgba(5, 5, 5, 0.5),
              0 0 0 0 rgba(5, 5, 5, 0.25);
        }

        .button-inner {
          --inset: 0.035em;
          position: relative;
          z-index: 1;
          border-radius: inherit;
          padding: 1em 1.5em;
          background-image: linear-gradient(135deg,
                  rgba(230, 230, 230, 1),
                  rgba(180, 180, 180, 1));
          transition: box-shadow 300ms ease, clip-path 250ms ease,
              background-image 250ms ease, transform 250ms ease;
          will-change: box-shadow, clip-path, background-image, transform;
          overflow: visible;
          clip-path: inset(0 0 0 0 round 999vw);
          box-shadow:
              0 0 0 0 inset rgba(5, 5, 5, 0.1),
              -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
              0 0 0 0 inset rgba(5, 5, 5, 0.1),
              0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25),
              0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1),
              0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
              -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25);
        }

        .neumorphic-button:hover .button-inner {
          clip-path: inset(clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 999vw);
          box-shadow:
              0.1em 0.15em 0.05em 0 inset rgba(5, 5, 5, 0.75),
              -0.025em -0.03em 0.05em 0.025em inset rgba(5, 5, 5, 0.5),
              0.25em 0.25em 0.2em 0 inset rgba(5, 5, 5, 0.5),
              0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.15),
              0 0 0 0 inset rgba(255, 255, 255, 1),
              0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
              -0.075em -0.12em 0.2em 0.1em inset rgba(5, 5, 5, 0.25);
        }

        .button-inner span {
          position: relative;
          z-index: 4;
          font-family: "Inter", sans-serif;
          letter-spacing: -0.05em;
          font-weight: 500;
          color: #333;
          transition: transform 250ms ease;
          display: block;
          will-change: transform;
          text-shadow: rgba(0, 0, 0, 0.1) 0 0 0.1em;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .button-inner .arrow-icon {
          width: 16px;
          height: 16px;
        }

        .neumorphic-button:hover .button-inner span {
          transform: scale(0.975);
        }

        .neumorphic-button:active .button-inner {
          transform: scale(0.975);
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .button-inner {
            padding: 0.8em 1.2em;
          }
          
          .button-inner span {
            font-size: 0.9em;
            white-space: nowrap;
          }
          
          .button-inner .arrow-icon {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </a>
  );
}
