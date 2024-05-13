import { useState, ChangeEvent } from "react";

const Lesson1_1 = () => {
  const [ngAge, setNgAge] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState('卍解')
  /**
   * レンダリングタイミングについて:
   * 初回レンダリング時は、「濃い文字と、薄い文字で2回描写されている」
   * AddAgeすると状態変数が更新されてレンダリングされていることが分かる
   * 親が再レンダリングされると子も再レンダリングされる
   *
   * コンソールに2度ログが出る理由について:
   * Strictモードとそうでないモードがある(src/main.tsx)
   * <React.StrictMode>があると2回呼び出しが行われる(開発環境の時のみ)
   * 2回呼び出しがあるのは、純関数(計算だけを行い他は何もしないこと)でコンポーネントは常に厳密に書くことで、
   * 2回呼び出しても同じものが呼び出されるか確かめるため。
   *
   * ReactがDOMにコミットするまでの流れ:
   * React Rendering
   * 1. Trigger (ユーザがボタンを押した、入力した)
   * 2. Rendering The Component　<= VDOMの差分チェック ※1
   * 3. Commiting to the DOM <= 変わったところだけCommit
   *
   * ※1について
   * 仮想DOM(VDOM) PreviousとCurrentのDiffを取る、 RealDOMにそこだけ反映
   * 実DOMを触ると全て更新する必要が出てしまうのでVDOMという考えが生まれた。
   * 必ずパフォーマンスが良くなるわけではない
   * https://engineering.monstar-lab.com/jp/post/2022/05/27/Is-Virtual-DOM-Outdated/
   * https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/
   *
   * Browser Rendering
   * 1. DOM Tree
   * 2. CSSOM Tree
   * 3. Javascript
   * 4. Layout
   * 5. Painting
   */
  console.log("レンダリングされました")

  const handleClickNg = () => {
    console.log("ngAge >>", ngAge)
    setNgAge(ngAge + 1) // 0 + 1
    console.log("ngAge", ngAge)
    setNgAge(ngAge + 1) // 0 + 1
    console.log("ngAge", ngAge)
    setNgAge(ngAge + 1) // 0 + 1
    console.log("ngResult:", ngAge) // ngResult: 1
  }
  const handleClickOkAge = () => {
    console.log("age >>" , age)
    // 更新用関数
    setAge((prevState) => prevState + 1) // setAge((0) => 0 + 1)
    console.log("age" , age)
    setAge((prevState) => prevState + 1) // setAge((1) => 1 + 1)
    console.log("age" , age)
    setAge((prevState) => prevState + 1) // setAge((3) => 2 + 1)
    console.log("result", age)

    console.log("Name", name)
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        value={name}
      />
      <br />
      {/* NG */}
      <button
        onClick={handleClickNg}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age NG
      </button>
      <p>You arr {ngAge}</p>
      {/* OK */}
      <button
        // 下記書き方の違い(どちらでも良い基本的にはこっち)
        //　再レンダリンしても関数の再生成が行われない
        onClick={handleClickOkAge}

        //　再レンダリンするたびに関数の再生成が行われる
        // 引数でイベントを受けとりたい時はこっち
        // onClick={() => handleClickOkAge()}

        className="border p-2 rounded-md bg-red-100"
      >
        Add Age NG
      </button>
      <p>You arr {age}</p>
    </div>
  );
};

export default Lesson1_1;
