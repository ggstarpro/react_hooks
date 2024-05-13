import { useState, ChangeEvent } from "react";

const Lesson1_2 = () => {
  const [form, setForm] = useState({
    firstName: "Alice",
    lastName: "Soft",
    email: "test@example.com"
  });
  // スプレット構文
  // console.log({...form, firstName: "UPdated"})

  // アンチパターン  ミュータブル(直接的 破壊的な操作)
  // form.firstName = 'アンチパターンの操作';

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
            type="text"
            className="border
            border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({
              ...form,
              firstName: e.target.value
            })}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="border
            border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({
              ...form,
              lastName: e.target.value
            })}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            className="border
            border-slate-500"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({
              ...form,
              email: e.target.value
            })}
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
