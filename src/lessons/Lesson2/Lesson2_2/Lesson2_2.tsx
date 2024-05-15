import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>('pro');
  const [bio, setBio] = useState<string|null>(null);
  const [count, setCount] = useState(0);
  // 第2引数の依存配列に入れたpersonが変わるたびに発火
  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const response = await fetchBio(person);
      if (!ignore) {
        setBio(response);
      }
    }
    startFetching();

    // 依存配列による無限ループ
    setCount(count+1)

    // クリーンアップ関数: 3秒以内にShinCode => TestUserを切り替えると、ShinCodeが出てTestUserに切り替わる
    // 最後に指定したものだけを表示したい
    // 発火タイミングは2つあり、1つがアンマウント時、もう一つが依存配列が変更された直前に発火
    return () => {
      ignore = true
    }
  }, [person]) // 無限ループ: [, count]

  return (
    <div>
      <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
      <p className="text-black">{count}</p>
    </div>
  );
};

export default Lesson2_2;
