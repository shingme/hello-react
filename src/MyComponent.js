import React from 'react';
import PropTypes from 'prop-types'; /* propTypes(컴포넌트의 필수 props를 지정하거나 props의 타입을 지정)를 사용하기 위한 임포트 */
//함수형 컴포넌트
const MyComponent = ({name, favoriteNumber, children}) => {
  //const {name,children} = props; /* 비구조화 할당 : 객체에서 값을 추출하는 문법(구조 분해 문법) */
  return (
    <div>안녕하세요, 제 이름은 {name}입니다. <br/> {/* 부모 컴포넌트에서 설정한 name값이 대응됨, 위에서 파라미터 형식으로 지정하지 않았으면 props.name 으로 사용해야함 */}
    children 값은 {children}입니다. <br/> {/* 컴포넌트 태그 사이의 내용을 보여주는 props */}
    제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = { /* 부모 컴포넌트에서 props 값을 따로 지정하지 않았을 때 보여줄 기본값 설정 */
  name : '기본 이름'
};

MyComponent.propTypes = { /* props 타입을 지정 */
  name : PropTypes.string, /* name 값은 무조건 String 형태로 전달 */
  favoriteNumber : PropTypes.number.isRequired // isRequired : 필수 props로 지정 (해당 props에 값 전달안하면 콘솔창에 경고메세지가 뜸)
};

export default MyComponent; /* 모듈 내보내기 */
