import { AppHeader } from '@/components/app-header';
import { TabBar } from '@/components/tab-bar';

export default function TabsLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="min-h-dvh flex flex-col">
      <AppHeader />
      <main className="flex-1 pb-[calc(env(safe-area-inset-bottom)+64px+12px)] px-4">
        {children}
      </main>
      <TabBar />
    </div>
  );
}
