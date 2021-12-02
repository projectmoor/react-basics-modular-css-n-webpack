import React from 'react'

import inlineStyles from './cmtItemStyles.js' // not modular css
import itemStyles from '../../css/commentItem.css' // modular css 
console.log(itemStyles)

export default function CommentItem(props) {
  /* return <div style={inlineStyles.boxStyle}>
    <h1 style={inlineStyles.titleStyle}>User：{props.user}</h1>
    <h3 style={inlineStyles.bodyStyle}>Comment：{props.content}</h3>
  </div> */

  return <div className={itemStyles.box}>
    <h1 className={itemStyles.title}>User：{props.user}</h1>
    <h3 className={itemStyles.body}>Comment：{props.content}</h3>
  </div>
}