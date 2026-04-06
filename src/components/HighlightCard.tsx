interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HighlightCard({ icon, title, description }: Props) {
  return (
    <div className="group p-6 lg:p-8 rounded-xl bg-white border border-gray/10 hover:border-amber/30 shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-lg bg-amber/10 text-amber flex items-center justify-center mb-5 group-hover:bg-amber/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-dark mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray leading-relaxed">{description}</p>
    </div>
  );
}
