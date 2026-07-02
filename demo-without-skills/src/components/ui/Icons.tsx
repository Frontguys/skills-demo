import type { SVGProps } from 'react';

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 2.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 2.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 4H12V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AlertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.15 6.4H1.4V15.6H4.15V6.4Z"
        fill="currentColor"
      />
      <path
        d="M2.78 5.2C3.66 5.2 4.38 4.48 4.38 3.6C4.38 2.72 3.66 2 2.78 2C1.9 2 1.18 2.72 1.18 3.6C1.18 4.48 1.9 5.2 2.78 5.2Z"
        fill="currentColor"
      />
      <path
        d="M9.02 6.4H6.4V15.6H9.14V10.9C9.14 9.6 9.39 8.34 11 8.34C12.58 8.34 12.6 9.83 12.6 10.98V15.6H15.35V10.42C15.35 8.02 14.83 6.18 12.02 6.18C10.68 6.18 9.77 6.92 9.4 7.62H9.36V6.4H9.02Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <rect x="1" y="4" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 6.8V11.2L11.5 9L7.5 6.8Z" fill="currentColor" />
    </svg>
  );
}
