import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("i run only one");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]); //keyword가 변화할 때 코드를 실행할 거임.
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
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
