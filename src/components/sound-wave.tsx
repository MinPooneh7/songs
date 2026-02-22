export default function AudioVisualizer() {
  return (
    <div>
      <div className="flex items-end gap-1 h-16">
        <div className="w-2 h-full bg-primary rounded-md origin-bottom scale-y-[0.4] animate-quiet" />
        <div className="w-2 h-full bg-primary rounded-md origin-bottom scale-y-[0.4] animate-normal" />
        <div className="w-2 h-full bg-primary rounded-md origin-bottom scale-y-[0.4] animate-quiet" />
        <div className="w-2 h-full bg-primary rounded-md origin-bottom scale-y-[0.4] animate-loud" />
        <div className="w-2 h-full bg-primary rounded-md origin-bottom scale-y-[0.4] animate-quiet" />
      </div>
    </div>
  );
}
