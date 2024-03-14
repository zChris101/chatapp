"use client";

import { User } from "@prisma/client";

interface AvatarProps {
  user?: User;
}

const Avatar = ({ user }: AvatarProps) => {
  return (
    <div className="relative">
      <div
        className="
         relative
         inline-block
         rounded-full
         overflow-hidden
         h-9
         w-9
         md:h-11
         md:w-11
        "
      >
        Avatar
      </div>
    </div>
  );
};

export default Avatar;
