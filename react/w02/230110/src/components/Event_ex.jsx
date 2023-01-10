import React, { useState } from 'react';

export default function Event_ex() {
  const [info, setInfo] = useState([
    { name: '코디', email: 'codi@gmail.com' },
    { name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setInfo(info.concat({ name: name, email: email }));
          setName('');
          setEmail('');
        }}
      >
        등록
      </button>
      {info.map((el, index) => {
        return (
          <div key={index}>
            <h2>
              {el.name} : {el.email}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
