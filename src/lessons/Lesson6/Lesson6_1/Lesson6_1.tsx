import { useState } from "react";
import Thread from "./Thread";
import { deliverMessage } from "./actions";

// useOptimistic: CanaryもしくはExperimentalでのみ現在使用可能
// UIを楽観的に更新: DBの連携関係なく押してすぐに反映してほしい。

export type Message = {
  text: string;
  sending: boolean;
  key: number;
};


const Lesson6_1 = () => {
  const [messages, setMessages] = useState<Message[]>([
    {text: 'Hello World', sending: false, key:1}
  ]);

  const sendMessage = async (formData: FormData)  => {
    const sentMessage = await deliverMessage(formData.get("message") as string);
    setMessages((messages) => [
      ...messages,
      {text: sentMessage, sending: false, key:1}
    ]);
  }

  return (
    <div>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default Lesson6_1;
