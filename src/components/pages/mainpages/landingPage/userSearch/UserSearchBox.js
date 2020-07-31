import React from 'react';
import styles from './userSearchBox.module.css';

const UserSearchBox = ({ userData }) =>  (
    <div className={styles.UserSearchBox}>
    {userData instanceof Array ? (
      <div className={`card ${styles.UserCard}`}>
        <ul className={`list-group list-group-flush ${styles.UserList}`}>
          {userData.map(({_id, photoURL, firstName, lastName}) => (
            <li 
              key={_id}
              class={`list-group-item ${styles.UserListItem}`}
            > 
              <div className={`row py-4 ${styles.UserBox}`}>
                <div className='col-4'>
                  <img src={photoURL} alt='' className='rounded-circle img-fluid'/>
                </div>
                <div className='col-8'>
                    <p className={styles.UserName}>{`${firstName} ${lastName}`}</p>
                    <div className="progress-bar-linear">
                    <div className={`progress my-2 ${styles.UserProgress}`}>
                        <div className={`progress-bar ${styles.UserProgressBar}`} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className={`progress-bar-text mb-0 ${styles.UserProgressText}`}>N90, 000<span className={styles.UserBreak}>90%</span></p>
                    <p className= {`progress-bar-text pt-1 ${styles.UserProgressTintText}`}>Raised of N100,000</p>

                  </div>
                </div>
             </div>
            </li>
          ))}
        </ul>
      </div>
    ) : null}
</div>
    )

export default UserSearchBox;

