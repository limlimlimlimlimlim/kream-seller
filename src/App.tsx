import React, { useCallback } from 'react';
import './App.css';
import { Button } from 'antd';

function App() {

  const startMacro = useCallback(()=>{
    alert(document.querySelector('.complete_btn_box a'));
    const requestBtn = document.querySelector('.complete_btn_box a');
    if(requestBtn){
      (requestBtn as HTMLAnchorElement).click();
    }
  }, [])

  const onClickStart = useCallback(()=>{
    startMacro();
    setInterval(startMacro, 7000)  
  },[startMacro]);

  console.log('DdDDD')

  return (
    <div className="App">
      <Button type='primary' size='small' shape='round' block={true} onClick={onClickStart}>보관판매 매크로 시작</Button>
    </div>
  );
}

export default App;
