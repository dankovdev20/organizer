'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartPie, FaHouse, FaNoteSticky, FaPlus, FaCalendar } from 'react-icons/fa6';
import { isActivePath } from '@/lib/is-active-path';

const TABS = [
  { href: '/', label: 'Home', icon: FaHouse, kind: 'tab' },
  { href: '/stats', label: 'Stats', icon: FaChartPie, kind: 'tab' },
  { href: '/expenses/new', label: 'Add', icon: FaPlus, kind: 'action' },
  { href: '/notes', label: 'Notes', icon: FaNoteSticky, kind: 'tab' },
  { href: '/calendar', label: 'Calendar', icon: FaCalendar, kind: 'tab' },
] as const;

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="fixed bottom-0 inset-x-0 mb-[calc(env(safe-area-inset-bottom)+12px)] mx-4 rounded-2xl border-t-border border-t bg-surface"
    >
      <ul className="h-16 grid grid-cols-5">
        {TABS.map(({ href, label, icon: Icon, kind }) => {
          const isActive = kind === 'tab' && isActivePath(pathname, href);

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`h-full flex flex-col items-center justify-center ${isActive ? 'text-primary' : 'text-muted'}`}
              >
                {kind === 'action' ? (
                  <span className="flex size-12 items-center justify-center rounded-full bg-background">
                    <Icon aria-hidden size={24} />
                  </span>
                ) : (
                  <Icon aria-hidden size={24} />
                )}
                <span className={`${kind === 'action' ? 'sr-only' : 'text-xs mt-0.5'}`}>
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
