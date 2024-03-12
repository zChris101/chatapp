"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

//comment

const DesktopItem = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}: DesktopItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link href={href}>
        <Icon className="h-6 w-6 shrink-0" />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
