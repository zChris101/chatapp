"use client";

import { Conversation } from "@prisma/client";

interface HeaderProps {
  conversation: Conversation;
}

const Header = ({ conversation }: HeaderProps) => {
  return <div>Header</div>;
};

export default Header;
