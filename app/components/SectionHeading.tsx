interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: Props) {
  return (
    <div className="text-center mb-16">
      <h2
        id={id ? `${id}-heading` : undefined}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-foreground/50 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-1 gradient-bg rounded-full" />
      </div>
    </div>
  );
}
