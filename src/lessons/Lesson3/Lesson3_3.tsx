import { useRef, useState } from "react";

/** 余計な再レンダリングを防ぐ */
const Lesson3_3 = () => {
  // const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("Lesson3_3 レンダリングされた")

  const handleClick = () => {
    // alert(inputText);
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input
        type="text"
        className="border-b"
        // onChange={(e) => setInputText(e.target.value)}
        // value={inputText}
        ref={inputRef}
      />
      <button
        onClick={handleClick}
      >
        input入力値を見る
      </button>
    </div>
  );
};

export default Lesson3_3;
