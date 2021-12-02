import React from "react";

import CommentItem from "./CommentItem.jsx";

// a class component
export default class CommentList extends React.Component {
  constructor(props) {
    super(props);

    // private data
    this.state = {
      cmts: [
        { user: "Ava", content: "Ava's comment" },
        { user: "Amelia", content: "Amelia's comment" },
        { user: "Emma", content: "Emma's comment" },
        { user: "Mia", content: "Mia's comment" },
        { user: "Olivia", content: "Olivia's comment" },
      ],
    };
  }

  render() {
    // forEach and array way
    /* var arr = []
    this.state.cmts.forEach(item => {
      arr.push(<h1>{item.user}</h1>)
    }) */

    return (
      <div>
        <h1 className="title">Comments</h1>
        {this.state.cmts.map((item, i) => {
          // return <CommentItem user={item.user} content={item.content} key={i}></CommentItem>
          return <CommentItem {...item} key={i}></CommentItem>;
        })}
      </div>
    );
  }
}
