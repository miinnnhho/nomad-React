import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //use only one
  return (
    <div>
      <h1>The Coin! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
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
//react에서 map 쓰면 element에 key 줘야함
