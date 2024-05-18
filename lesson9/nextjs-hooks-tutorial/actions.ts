"use server"

export const formAction = async (previousState: number) => {
  // "use server" ファイルを分けた場合は先頭に宣言
  console.log("server action")

  // user data db save;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("user data added to db")

  console.log("previousState", previousState)
  return previousState + 1;
}