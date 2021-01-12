import React from 'react';
import './App.css';
import MyComponent from './MyComponent'; // MyComponent 컴포넌트 불러오기

const App = () => {
  return <MyComponent name="React" favoriteNumber={3}>리액트</MyComponent>; /* props 렌더링 : props값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 */
};

export default App;
