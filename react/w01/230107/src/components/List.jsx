import React from 'react'
import Modal from './Modal'
import ListChild from './ListChild'

export default function List() {
  const dataArr = [
    {
      text : "리액트 공부하기",
      detail: "state 활용법 익히기"
    },

    {
      text : "코테 문제 풀기",
      detail: "Lv 0 정복"
    },
    {
      text : "변경 확인",
      detail: "신기하죠"
    },
  ];

  return (
    <div>
        <h1>오늘 해야할 일</h1>
        <hr />
        {dataArr.map((el, index)=> {
          return <ListChild text={el.text} detail={el.detail} key={index}/>
        })}
        <Modal />
    </div>
  )
}
