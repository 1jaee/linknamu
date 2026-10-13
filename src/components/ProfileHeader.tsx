import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center motion-safe:animate-fade-up">
      <div className="rounded-full bg-gradient-to-b from-white/90 to-white/40 p-1 shadow-[0_18px_40px_-12px_rgb(140_50_0/0.55),0_4px_10px_-4px_rgb(140_50_0/0.3)]">
        <Image
          className="size-32 rounded-full object-cover shadow-[inset_0_2px_6px_rgb(0_0_0/0.4)]"
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          loading="eager"
        />
      </div>
      <h1 className="mt-6 text-[1.75rem] font-bold tracking-tight">{name}</h1>
      <p className="mt-2 whitespace-pre-line text-[15px] font-medium leading-6 text-muted">
        {bio}
      </p>
    </header>
  );
}
