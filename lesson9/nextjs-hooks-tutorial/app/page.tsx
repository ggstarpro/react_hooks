"use client"

import IncrementButton from "@/IncrementButton";
import { formAction } from "@/actions";
import { useFormState } from "react-dom";
// useFormStatusは同じコンポーネントでレンダリングされた<form>のステータス情報を返さない
// import { useFormStatus } from "react-dom";

export default function Home() {
  // useStateとの違い => サーバー側で使うhooks, Javascriptが動かない環境でも動く
  // プログレッシブエンハンスメント
  const [state, formDispatch] = useFormState(formAction, 0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formDispatch}>
        <IncrementButton />
        <span>Count: {state}</span>
      </form>
    </main>
  );
}
