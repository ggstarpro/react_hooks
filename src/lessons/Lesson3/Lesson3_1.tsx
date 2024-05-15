import { useRef, useState } from "react";

const Lesson3_1 = () => {
  // 使ってみよう(あまりこういう使い方はしない、主にDOM操作で使用する)
  const [input, setInput] = useState('');
  const ref = useRef(0);
  // console.log(ref)
  // {
  //   "current": 0
  // }
  function handleClick() {
    // 値を書き換えられるが、再レンダリングされない特徴を持つ
    ref.current = ref.current + 1
    alert(ref.current)
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} className="border" />
      <button onClick={handleClick}>Click me!</button>
      <p></p>
    </div>
  );
};

export default Lesson3_1;
