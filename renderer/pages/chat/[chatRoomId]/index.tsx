import withAuth from '@utils/withAuth';
import ChatRoomContainer from 'src/components/unit/chat/room/ChatRoom.container';

function ChatRoomPage() {
  return <ChatRoomContainer />;
}

export default withAuth(ChatRoomPage);
