import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;

//컴포넌트를 다르게 만들고, 그 컴포넌트를 위한 css를 만들고, className을 기억할 필요 없음.
// 왜? => className={styles.title} 이런식으로 필요할 때 써주면 랜덤으로 만들어주니까!
//코드를 딱 한 번 실행할 거임. 뭘?
//useEffect는 두 개의 argument를 가짐.
//useEffect는 우리 코드가 딱 한 번만 실행될 수 있도록 보호해줌.
// ,[]) -> 한 번만 실행해라
// ,[keyword] -> keyword 변화시 실행해라
// js 쓸 땐 {} 쓰기
