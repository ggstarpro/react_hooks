import { useState } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

// 重いPOSTタブクリック後Contactタブをクリックすると、POSTタブでブロックされてからContactが表示される
// 重い挙動の優先順位を下げてすぐに表示できるものは表示するようにする

const Lesson7_1 = () => {
  const [tab, setTab] = useState("about");

  function selectTab(nextTab: string) {
    setTab(nextTab);
  }

  return (
    <div>
      <div className="flex gap-4">
        <TabButton
          isActive={tab === "about"}
          onClick={() => selectTab("about")}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === "posts"}
          onClick={() => selectTab("posts")}
        >
          Posts (slow重い)
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => selectTab("contact")}
        >
          Contact
        </TabButton>
      </div>
      <hr className="mt-4" />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
};

export default Lesson7_1;
