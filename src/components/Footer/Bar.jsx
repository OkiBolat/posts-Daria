/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { cn } from '../../helpers/reactBem';
import './Bar.scss';

const bar = cn('bar');

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [fontWeightValue, setFontWeightValue] = useState('light');

  return (
    <div style={isOpen === false ? { left: '-570px' } : {}} className={bar()}>
      <div className={bar('addTitle')}>
        <span>ADD</span>
        <span>POST</span>
      </div>
      {isOpen === false ? (
        <button className={bar('toogleBtn')} onClick={() => setIsOpen(!isOpen)}>
          &#xf0da;
        </button>
      ) : (
        <button style={{ paddingLeft: '4px' }} className={bar('toogleBtn')} onClick={() => setIsOpen(!isOpen)}>
          &#xf0d9;
        </button>
      )}
      <div className={bar('addForm')}>
        <form action="">
          <input placeholder="Что у вас нового?" className={bar('textArea')} type="text" />
          <div>
            <h5 style={{ color: '#ffff', margin: 0, padding: 0 }}>Font weight</h5>
            <input type="radio" name="bold" id="" />
            <span>bold</span>
            <input type="radio" name="light" id="" />
            <span>Light</span>
          </div>
          <button>
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bar;
