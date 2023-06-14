import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      //toDo가 비어있다면
      return; //return(함수 작동하지 않도록))
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
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
