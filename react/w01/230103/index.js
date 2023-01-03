// React 따라하기
function HelloWorldButton() {
    const [ isClick, setClickState ] = React.useState("It isn't clicked");
    console.log(isClick);

    return React.createElement(
        "button", 
        { onClick: () => {setClickState("It's clicked")} }, 
        isClick
        ); 
    }

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer); // 리액트로 그리는 모든 것의 근간이 될 것이다.
root.render(e(HelloWorldButton)); // 무언가를 그릴때 render라는 함수 사용, 함수로...뭘 그리는거 신기하다.
