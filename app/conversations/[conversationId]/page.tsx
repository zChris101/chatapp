interface Iparams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: Iparams }) => {
  return <div>Conversation Id!</div>;
};

export default ConversationId;
