import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// TODO: 보여 주기용 더미 값. 실제 내용으로 교체할 것
const profile = {
  name: "한보따리 수제반찬",
  bio: "청암로 82, 푸르지오 파르세나 근생1동\n영업시간 10:00~22:00\n(무인영업 : 19:00~)",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "인스타그램", url: "https://www.instagram.com/" },
  { title: "네이버 밴드", url: "https://band.us/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-6 py-16">
      <ProfileHeader {...profile} />
      <nav className="flex flex-col gap-6">
        {links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </nav>
    </main>
  );
}
