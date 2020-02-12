import React from 'react';

export default class TableRow extends React.Component{
  render(){
    const { className, children, ...rest } = this.props;
    return(
      <div className={`rt-tr ${className}`} {...rest}>
        {children}
      </div>
    )
  }
}