import React, { useState } from "react";


// React.memo (React.memoもしくはmemoで書くが、React.memoの方が一般的)
// コンポーネントのレンダリング結果をメモ化する

const Lesson5_1 = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  console.log("Lesson5_1 Parent rendered");

  return (
    <div>
      <button
        onClick={() => setCount1(count1 + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <button
        className="border-2 px-2 py-2 rounded-md ml-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Child Count
      </button>
      <p>Parent: {count1}</p>
      <Child count2={count2} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
// propsが更新されると再レンダリングされる
// 子コンポーネント全てReact.memoをつけるような何でもかんでもメモ化するのは得策ではない。
// メモ化をした方が良いのは、挙動が重い時、インターラクティブな図形を動かすようなアプリケーションだったり、レンダリング回数が多い場合。
// 毎回props変わるものは意味がないのでやらない。
// デフォルトでは特に考慮する必要ない重くなったらやる。
// useContextは考えなしでmemo化して良い。
// useEffectを使用しないカスタムフックの関数はuseCallbackで考えなしでmemo化して良い
const Child = React.memo(({ count2 }: { count2: number }) => {
  console.log("Lesson5_1 Child rendered");

  //重い処理
  let i = 0;
  while (i < 10000000) i++;
  //重い処理

  return <p>Child: {count2}</p>;
});

export default Lesson5_1;
