import React, { useState, useEffect, useRef } from 'react';
import styles from './userSearch.module.css';
import axios from 'axios';
import UserSearchBox from './UserSearchBox'

const UserSearch = () => {
  const [search, setSearch] = useState('')
  const [clear, setClear] = useState(false)
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
    if(isInitialMount.current || search === '' ) {
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
    <li className= {`${styles.UserSearch} nav-item`}>
    <form className="form-inline">
      <div className= {`${styles.UserFormGroup} input-group`}>
        <input 
        type='text'
        placeholder='Search'
        id='searchUsers'
        className= {styles.SearchForm}
        value= {search}
        onChange={onChange}
        />
      </div>
  </form>
 
  <button
  className={styles.SearchIcon}
  ><i className={`fa fa-search ${styles.schIc}`} aria-hidden="true"></i>
  </button>

  {clear ? (
    <button 
      className={styles.CloseIcon}
      onClick={onTextClear}>
    <i className={`fa fa-times ${styles.schIc}`} aria-hidden="true"></i>
    </button>) : null}
        
    <UserSearchBox 
      userData = {userData}
    />
    </li>
  )
}

export default UserSearch;
