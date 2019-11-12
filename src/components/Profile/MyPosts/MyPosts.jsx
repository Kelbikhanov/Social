import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {



    let postsElement = props.posts.map( p => <post message={p.message} likesCount={p.likesCount}/> );
  
    return(

    <div className={s.postsBlock}>

        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
        )

}

export default MyPosts;