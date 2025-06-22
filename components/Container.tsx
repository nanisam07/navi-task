// ✅ components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
}
