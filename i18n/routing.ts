import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['fr', 'es'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/hotels': '/hotels',
    '/destinations': '/destinations',
    '/car-hire': '/car-hire',
    '/contact': '/contact',
    '/about': '/about',
    '/faq': '/faq',
    '/blog': '/blog',
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);