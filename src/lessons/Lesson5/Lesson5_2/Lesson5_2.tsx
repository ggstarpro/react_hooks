import { memo, useState } from "react";
import { useToggle } from "./hooks/useToggle";

// useCallBack
// 関数の再生成を防ぐ

const Lesson5_2 = () => {
  const [count, setCount] = useState(0);
  // 子コンポーネントだけレンダリングしたい場合、子で宣言を行えばOK
  // 子コンポーネントを何個も使用する場合は、子で宣言しない方が良い
  // 「「一般的には親コンポーネントで宣言して、propsで子に渡すのがベストプラククティス」」
  // 他のコンポーネントで非常に多く使い回すならuseContextを使用する
  const [on, toggle] = useToggle(false);

  console.log("Parent rendered");

  return (
    <div>
      <p>Parent: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 px-2 py-2 rounded-md"
      >
        Parent Count
      </button>
      <Child toggle={toggle} on={on} />
    </div>
  );
};

export default Lesson5_2;

// eslint-disable-next-line react-refresh/only-export-components
// propsで同じ値でもメモリのアドレスが変わると再レンダリングされる
const Child = memo(({ toggle, on }: { toggle: () => void; on: boolean }) => {
  console.log("Child rendered");
  let i = 0;
  while (i < 10000000) i++;
  return (
    <div>
      <p>Child {on ? "ON" : "OFF"}</p>
      <button onClick={toggle} className="border-2 px-2 py-2 rounded-md">
        Toggle
      </button>
    </div>
  );
});
