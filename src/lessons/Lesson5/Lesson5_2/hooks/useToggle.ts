import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  // 関数が再生成されてしまう
  // const toggle = () => {
  //   setState((state) => !state);
  // };

  // 関数のメモ化: コンポーネントが再レンダリングされても関数が再生成されない
  // カスタムフックはの関数とか値はメモ化した方が良い
  const toggle = useCallback(() => {
    setState((state) => !state)
  }, [])

  return [state, toggle];
};
