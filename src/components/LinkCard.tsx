type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      className="group grid h-16 w-full grid-cols-[4rem_1fr_4rem] items-center rounded-3xl border border-glass-border bg-glass px-6 text-base font-semibold shadow-[0_8px_24px_-12px_rgb(140_50_0/0.35),inset_0_1px_0_rgb(255_255_255/0.6)] backdrop-blur-xl transition-colors duration-300 hover:bg-glass-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-glass-hover motion-reduce:transition-none"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <span className="col-start-2 text-center">{title}</span>
      <span className="flex items-center justify-end gap-1.5 text-muted transition-colors duration-300 group-hover:text-foreground motion-reduce:transition-none">
        <span className="text-xs font-medium tabular-nums">
          {count.toLocaleString("ko-KR")}회
        </span>
        <svg
          className="size-3.5 shrink-0"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 11 11 5M6 5h5v5" />
        </svg>
      </span>
    </a>
  );
}
