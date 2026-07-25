export default function SectionTag({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
      </span>
      <span className="font-mono text-xs sm:text-sm tracking-widest text-signal2 uppercase">
        {children}
      </span>
    </div>
  );
}
