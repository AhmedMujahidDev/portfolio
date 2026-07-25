import SectionTag from './SectionTag';

export default function SectionHeading({ eyebrow, heading, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center flex flex-col items-center' : ''}>
      <SectionTag>{eyebrow}</SectionTag>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight">
        {heading}
      </h2>
      <div
        className={`h-px w-16 bg-signal/60 mt-6 ${align === 'center' ? '' : ''}`}
        aria-hidden="true"
      />
    </div>
  );
}
