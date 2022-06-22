/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cn } from '../../helpers/reactBem';
import { addPostThunk } from '../../redux/actionsCreator';
import './Bar.scss';

const bar = cn('bar');

const useInput = () => {
  const [postText, setPostText] = useState('');
  const onChange = (e) => {
    setPostText(e.target.value);
  };
  const onClear = () => {
    setPostText('');
  };
  return {
    bind: { postText, onChange },
    onClear,
    postText,
  };
};

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const postInput = useInput();
  const dispatch = useDispatch();
  const postBind = postInput.bind;
  const addPost = () => {
    if (postInput.postText === '') return;

    dispatch(addPostThunk({
      createdAt: new Date(),
      name: 'Rosemarie Predovic',
      postText: postInput.postText,
      fontWeight: false,
    }));
    postInput.onClear();
    setIsOpen(false);
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
          <input onChange={postBind.onChange} value={postInput.value} placeholder="Что у вас нового?" className={bar('textArea')} type="text" />
          <button onClick={addPost}>
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bar;
