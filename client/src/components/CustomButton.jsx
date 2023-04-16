import React from 'react'

import styles from '../styles';

const CustomButton = ({ title, handleclick, restStyles }) => {
  return (
    <button
        type="button"
        className={`${styles.btn} ${restStyles}`}
        onClick={handleclick}
    >
        {title}
    </button>
  )
}

export default CustomButton