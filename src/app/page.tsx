import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "한보따리",
  bio: "매일매일 정성을 다 해 만드는 수제반찬!",
  imageSrc: "/profile.jpg",
};

const links = [
  {
    title: "인스타그램",
    url: "https://www.instagram.com/hanbotari_banchan?mdxt=NGh0ZGo0aHI0ZHVl&utm_source=qr",
  },
  { title: "네이버밴드", url: "https://www.band.us/band/96955441/post" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-12 px-8 py-20">
      <ProfileHeader {...profile} />
      <nav className="flex flex-col gap-4 motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
        {links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </nav>
    </main>
  );
}
