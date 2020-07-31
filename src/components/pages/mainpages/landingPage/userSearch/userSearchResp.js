import React, { useState, useEffect, useRef } from 'react';
import styles from './userSearchResp.module.css';
import UserSearchBoxResponsive from './UserSearchBoxResp'
import axios from 'axios';


const UserSearchResponsive = () => {
  const [search, setSearch] = useState('');
  const [clear, setClear] = useState(false);
  const [userData, setUserData] = useState(null);

  const onChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
   
    if (value) {
      setSearch(value)
    setClear(true)

    } else {
      setSearch('')
      setUserData(null)
    }
  };

  const onTextClear = () => {
    if (clear) {
      setSearch('')
      setClear(false)
      setUserData(null)
    }
  }
  
  const isInitialMount = useRef(true);

  useEffect(() => {
    if( isInitialMount.current || search === '' ) {
      isInitialMount.current = false
    } else {
      const timer = setTimeout(() => {
        axios.get(`https://api.fundmylaptop.com/api/search/users?q=${search}`, {
        })
        .then((response) => {
          const data = response.data.data;
            setUserData(data)
        })
        .catch((error) => {
          console.log('error ---->>>', error.message);
        });
      }, 300);
  
      return () => clearTimeout(timer);
    }
  }, [search]);
  


  return (
    <div className={`${styles.UserSearchGenResp} w-100 nav-item`}>
      <div className='container'>
     <div className = {`${styles.UserSearchResp} nav-item`}>
     <div className={`${styles.FormGroupResp} form-group`}>
     <label htmlFor='searchUsersResp'></label>

     <input 
       type='text'
       placeholder='Search'
       id='searchUsersResp'
       className={`${styles.SearchFormResp} form-control`}
       value= {search}
       onChange={onChange}
     />
   </div>
   <button
   className={styles.SearchIconResp}
   ><i className={`fa fa-search ${styles.schIcResp}`} aria-hidden="true"></i>
   </button>
   {clear ? (
     <button 
       className={styles.CloseIconResp}
       onClick={onTextClear}>
     <i className={`fa fa-times ${styles.schIcResp}`} aria-hidden="true"></i>
     </button>
   ) : null}
    <UserSearchBoxResponsive 
      userData = {userData}
    />
     </div>
      </div>
    </div>
  )
}

export default UserSearchResponsive;

