import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <Image
        className="size-40 rounded-full border-2 border-zinc-900 object-cover dark:border-zinc-100"
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        loading="eager"
      />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="whitespace-pre-line leading-7 text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
    </header>
  );
}
