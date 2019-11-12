import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
    return (

        <div className={s.item}>
          <img src='https://mors-kemerovo.sibnet.ru/upload/imganonsbig/1421312106.jpg' />
          { props.message }
          <div>
          <span>Like</span>
          </div>
        </div>)

}

export default Post;