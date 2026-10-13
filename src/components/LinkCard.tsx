type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      className="group grid h-16 w-full grid-cols-[1.25rem_1fr_1.25rem] items-center rounded-3xl border border-glass-border bg-glass px-6 text-base font-semibold shadow-[0_8px_24px_-12px_rgb(140_50_0/0.35),inset_0_1px_0_rgb(255_255_255/0.6)] backdrop-blur-xl transition-colors duration-300 hover:bg-glass-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-glass-hover motion-reduce:transition-none"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="col-start-2 text-center">{title}</span>
      <svg
        className="size-4 justify-self-end text-muted transition-colors duration-300 group-hover:text-foreground motion-reduce:transition-none"
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
    </a>
  );
}
