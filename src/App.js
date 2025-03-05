import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>리액트 gh-pages 배포하기</h1>
        <ol>
          <li>깃허브 레포지토리 생성, 브랜치 main 변경 후 저장하여 깃페이지 만들기</li>
          <li>npm install gh-pages</li>
          <li>npm run build</li>
          <li>package.json 변경
              script에 
                "deploy": "gh-pages -d build",
                "predeploy": "npm run build"
               추가
          </li>
          <li>"homepage": "https://chobee.github.io/레퍼지토리명/" 주소 추가</li>
          <li>npm run deploy</li>
          <li>gh-pages 브랜치 생성확인 후 저장</li>
          <li>수정 재배포시 npm run deploy</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
