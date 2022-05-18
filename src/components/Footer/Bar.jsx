/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cn } from '../../helpers/reactBem';
import { addPostThunk } from '../../redux/actionsCreator';
import './Bar.scss';

const bar = cn('bar');

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postData, setPostData] = useState('');
  const dispatch = useDispatch();

  const addPost = () => {
    if (postData === '') return;
    dispatch(addPostThunk({
      createdAt: new Date(),
      name: 'Rosemarie Predovic',
      avatar: '',
      postText: postData,
      fontWeight: false,
      id: '1',
    }));
    setPostData('');
  };

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
        <form onChange={(e) => e.preventDefault()} action="">
          <input value={postData} onChange={(e) => setPostData(e.target.value)} placeholder="Что у вас нового?" className={bar('textArea')} type="text" />
          <button onClick={addPost}>
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bar;
