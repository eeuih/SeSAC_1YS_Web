import React from 'react';
import Button from './Button';

export default function PinkButton({ text, clickEvent }) {
  return (
    <>
      <Button
        text={text}
        clickEvent={clickEvent}
        mainColor="#fa7eeb"
        subColor="#e03abf"
        hoverColor="#f93ce3"
      />
    </>
  );
}
