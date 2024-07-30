// 데이터 상태
function App042() {

  let list = [1, 2, 3, 10, 20, 100, 200];  // 상태데이터

  return (
    <>
      <div>{list.map(n => (<h4>{n}</h4>))}</div>
      <div>{list.map(n => (<h4>n</h4>))}</div>
      <div>{list}</div>
      <div>{list.map(n => n)}</div>
    </>
  );
}

export default App042;