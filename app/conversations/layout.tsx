import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversation";
import getUsers from "../actions/getUsers";
import Users from "../users/page";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
        users = {users}
        initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
