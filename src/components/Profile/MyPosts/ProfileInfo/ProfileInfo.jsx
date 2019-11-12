import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
     <div>

         <div>
             <img src = 'https://avatars.mds.yandex.net/get-pdb/28866/225f9b2a-fd8e-4e3d-9ffb-dad94195ba35/s1200?webp=false'/>
         </div>
         <div className={s.descriptionBlock}>
             ava + description
         </div>

     </div>

   )
}

export default ProfileInfo;