import { useState } from "react";
import { useAuth } from "./context/AuthContext";

// src/App.tsxでAuthProviderを使用してラップ済
const Lesson4_1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login({id: "1", username: username, email: email});
  };

  return (
    <div>
        {user ? (
        <div>
          <p>ログイン済み:</p>
          <button onClick={logout}>ログアウト</button>
        </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>ログイン</button>
          </div>
        )}
    </div>
  );
};

export default Lesson4_1;
