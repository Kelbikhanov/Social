import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
    return (
        <div className={s.item}>
            <img src='https://mors-kemerovo.sibnet.ru/upload/imganonsbig/1421312106.jpg' />
          <div>
          <span>Like</span>
          </div>
        </div>
    )
}

/*{ props.state.messages }*/

export default Post;