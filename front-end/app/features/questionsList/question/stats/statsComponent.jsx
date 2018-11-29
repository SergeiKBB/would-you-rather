import React from 'react';

const Stats = (props) => {
  const { isOpen } = props;
  const stats = isOpen ? <div>
    <span>1</span>
    <span>2</span>
  </div>
    : null;
  return stats;
};

export default Stats;
