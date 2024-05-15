import { useEffect, useState } from "react";

const Lesson2_1 = () => {
  // Effect:副作用、Event:(Effectとの対比)
  // useEffect();

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  // console.log("rendered Lesson2_1")

  // Reactの管轄外のAPI、オブジェクトと場合などに利用
  useEffect(() => {
    function handleMove(e: PointerEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    console.log("render handleMove")
    window.addEventListener("pointermove", handleMove)

    // クリーンアップ関数: 監視しているものは遷移したり、閉じたりしたときは消さないとevent listen状態が残り続けて、メモリリークする可能性がある
    // コンポーネントがアンマウントされる直前に呼び出される(DOMが削除される時、ページを切り替えるとか、タブを閉じる時)
    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  },[]);
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    ></div>
  );
};

export default Lesson2_1;
