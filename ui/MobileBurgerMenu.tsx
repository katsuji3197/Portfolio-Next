import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type MobileBurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type MobileBurgerMenuItem = {
  text: string;
  href: string;
};

type FooterSNS = {
  name: string;
  iconSrc: string;
  href: string;
};

const mobileBurgerMenuItems: Array<MobileBurgerMenuItem> = [
  {
    text: 'HOME',
    href: '/',
  },

  {
    text: 'WORKS',
    href: '/works',
  },

  {
    text: 'ABOUT',
    href: '/about',
  },
  {
    text: 'CONTACT',
    href: '/contact',
  },
];

const footerSNS: Array<FooterSNS> = [
  {
    name: 'Instagram',
    iconSrc: '/instagram_black.svg',
    href: 'https://www.instagram.com/iamkatsuj1',
  },
  {
    name: 'X',
    iconSrc: '/x_black.svg',
    href: 'https://x.com/iamkatsuji',
  },
  {
    name: 'Github',
    iconSrc: '/github_black.svg',
    href: 'https://github.com/katsuji3197',
  },
];

export function MobileBurgerMenu({ isOpen, setIsOpen }: MobileBurgerMenuProps) {
  const closeMenu = () => {
    setIsOpen(false);
  };

  const overlayStyles = isOpen
    ? 'fixed inset-0 z-40 bg-black opacity-60'
    : 'hidden';

  const menuStyles = isOpen
    ? 'animate-scale-in-center pt-28 pl-5 sm:pl-24 fixed inset-0 z-50 flex h-[80vh] w-[94vw] sm:w-[80vw] flex-col'
    : 'hidden';

  return (
    <>
      <div className={`overlay ${overlayStyles}`} onClick={closeMenu}></div>
      <nav className={`menu ${menuStyles}`}>
        <div className={`animation-delay-show bg-white opacity-90 shadow-md rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
          <button onClick={closeMenu} className="pt-24 absolute top-12 right-8">
            <Image
              src="/CloseMark.svg"
              width={35}
              height={35}
              alt="閉じる"
            />
          </button>
          <div className="flex max-h-[50vh] min-h-[380px] flex-col justify-between pt-[10vh] text-[24px] sm:text-[30px] text-gray-700 pl-9">
            {mobileBurgerMenuItems.map((item) => (
              <Link href={item.href} key={item.text} onClick={closeMenu}>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-[#575757]">
            <div className="flex justify-center">
              <div className="mt-[115px] h-[0px] w-[80vw] translate-x-[-5px] border border-gray-500" />
            </div>
            <div className="flex flex-col justify-center pb-[12px] pt-[12px]">
              <div className="flex justify-between text-black">
                <div className="flex gap-4 pl-9">
                  {footerSNS.map((item) => (
                    <Link className="mr-[2vw]" href={item.href} key={item.name}>
                      <Image
                        src={item.iconSrc}
                        alt={`${item.name}のアイコン`}
                        width={34}
                        height={34}
                        sizes="100%"
                        className="w-[33px] md:w-[23px]"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] pl-9">
                <p className="mt-[20px]">
                  (C) 2023 NAKATSUJI Motoki
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
