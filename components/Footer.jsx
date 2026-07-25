import { siteConfig } from '@/content/data';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-line/70 text-center">
      <p className="font-mono text-xs text-muted2">
        {'// built by '}
        {siteConfig.name} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
