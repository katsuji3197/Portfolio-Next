import Image from "next/image";

type FooterSNS = {
  name: string;
  iconSrc: string;
  href: string;
};

export default function news() {
  const footerSNS: Array<FooterSNS> = [
    {
      name: "Instagram",
      iconSrc: "/instagram_black.svg",
      href: "https://www.instagram.com/iamkatsuj1",
    },
    {
      name: "X",
      iconSrc: "/x_black.svg",
      href: "https://x.com/iamkatsuji",
    },
    {
      name: "Github",
      iconSrc: "/github_black.svg",
      href: "https://github.com/katsuji3197",
    },
  ];

  return (
    <main className="w-screen h-screen bg-neutral-100 text-neutral-800">
      <div className="w-screen bg-blue-900 px-4 flex justify-between items-center shadow-xl fixed top-0">
        <p className="text-white py-4 text-xl font-black leading-none">
          NEWS ZAKI
        </p>
        <svg
          width="32"
          height="20"
          viewBox="0 0 56 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 0H24C25.0609 0 26.0783 0.421427 26.8284 1.17157C27.5786 1.92172 28 2.93913 28 4C28 5.06087 27.5786 6.07828 26.8284 6.82843C26.0783 7.57857 25.0609 8 24 8H4C2.93913 8 1.92172 7.57857 1.17157 6.82843C0.421427 6.07828 0 5.06087 0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0ZM32 32H52C53.0609 32 54.0783 32.4214 54.8284 33.1716C55.5786 33.9217 56 34.9391 56 36C56 37.0609 55.5786 38.0783 54.8284 38.8284C54.0783 39.5786 53.0609 40 52 40H32C30.9391 40 29.9217 39.5786 29.1716 38.8284C28.4214 38.0783 28 37.0609 28 36C28 34.9391 28.4214 33.9217 29.1716 33.1716C29.9217 32.4214 30.9391 32 32 32ZM4 16H52C53.0609 16 54.0783 16.4214 54.8284 17.1716C55.5786 17.9217 56 18.9391 56 20C56 21.0609 55.5786 22.0783 54.8284 22.8284C54.0783 23.5786 53.0609 24 52 24H4C2.93913 24 1.92172 23.5786 1.17157 22.8284C0.421427 22.0783 0 21.0609 0 20C0 18.9391 0.421427 17.9217 1.17157 17.1716C1.92172 16.4214 2.93913 16 4 16Z"
            fill="#fbfbfb"
          />
        </svg>
      </div>
      <Image src="/gou.png" alt="News image" width={800} height={800} className="px-2 pt-16"/>
      <div className="flex flex-col w-full p-4">
        <div className="border border-neutral-200 mb-2" />
        <h1 className="text-lg font-bold py-2">
          野々市の20代学生、ストーカー容疑で逮捕。
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 text-sm pt-1 pb-4 leading-none">
            2024年11月22日
          </p>
          <div className="flex gap-2">
            <Image src="/github_black.svg" alt="" width={20} height={20} />
            <Image src="/x_black.svg" alt="" width={20} height={20} />
          </div>
        </div>
        <div className="border border-neutral-200" />
        <p className="pt-4">
          21日、金沢工業大学の南剛容疑者(21)がストーカー規制法違反の疑いで逮捕された。南容疑者は昨日、同大学の吉野裕美さんの家に侵入しようとし、その後通報を受けた野々市警察署の警察官により逮捕された。
        </p>
        <p className="pt-1">
          南容疑者は日常的に吉野さんに対し執拗にストーカー行為を行なっており、逮捕時まで計150日以上にわたり尾行、何らかの方法で部屋に侵入し、コーンポタージュを飲んでいた疑いがかけられている。
        </p>
        <p className="pt-1">
          同署の調べによると、南容疑者は尾行を認めているものの、日常的に侵入している疑いを否認しているという。
        </p>
      </div>
    </main>
  );
}
