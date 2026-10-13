import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links } from "@/lib/links";

const profile = {
  name: "한보따리",
  bio: "매일매일 정성을 다 해 만드는 수제반찬!",
  imageSrc: "/profile.jpg",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-12 px-8 py-20">
      <ProfileHeader {...profile} />
      <LinkList links={links} />
    </main>
  );
}
