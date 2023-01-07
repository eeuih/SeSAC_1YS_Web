import React from 'react'
import ShoppingList from './ShoppingList';

export default function Shopping() {
    const items = [
      {
        item: "PS5",
        price: "685,000원",
      },
      {
        item: "에어 프라이어",
        price: "50,000원",
      },
      {
        item: "사세 치킨윙",
        price: "11,500원",
      },
    ];
    
  return (
    <div>
        <h1>컴포넌트</h1>
         {items.map((el)=> {
          return <ShoppingList item={el.item} price={el.price}/>
        })}

        <h1>HTML</h1>
        {items.map((el, index)=>{
            return(
            <div key={index}>
            <h2>품목명: {el.item}</h2>
            <p>가격: {el.price}</p>
            <hr/>
            </div>
            );
            })}
    </div>
  )
}
