import { useDeferredValue, useState, useTransition } from "react";
import SlowList from "./SlowList";

const Lesson8_2 = () => {
  const [text, setText] = useState("");
  // 打ち込むたびにtextが変わるが、子コンポーネントには遅延した値が渡されるためmemo化が有効になる
  const deferredText = useDeferredValue(text);
  console.log(">>>")
  console.log("text:", text)
  console.log("deferredText:", deferredText)

  // useTransitionを使うとどうなるのか？
  // => 入力フィールドを制御するstageに対してトランジションを使用することはできません。
  // const [isPending, startTransition] = useTransition();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className={`border-2 border-slate-400 px-3 py-3 rounded-md`}
        value={text}
      />
      <SlowList text={deferredText} />
    </div>
  );
};

export default Lesson8_2;
