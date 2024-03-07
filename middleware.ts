import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/users/:path*"],
};
