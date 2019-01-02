import React from 'react';
import styles from './formItem.less';

const FormItem = props => {
  const {type, text, handle} = props;
  if (type === 'textarea') {
    return (
      <div className='form-group'>
        <label className={`form-label ${styles.label}`}>{text}</label>
        <textarea className='form-control' onChange={handle}/>
      </div>
    )
  }

  return (
    <div className='form-group'>
      <label className={`form-label ${styles.label}`}>{text}</label>
      <input className='form-control' onChange={handle}/>
    </div>
  )
};

export default FormItem;
