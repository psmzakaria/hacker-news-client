import React from "react";

const UpvoteButton = props => {
  return (
    <div className="votes">
      <p>
        <div className="voteUp" onClick={props.voteUp} />
      </p>
      <p className="voteIncrease">Votes: {props.voteIncrease}</p>
    </div>
  );
};

export default UpvoteButton;
