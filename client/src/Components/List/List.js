import React from "react";
import "./List.css";

export const List = props => {
  return (
    <div className="card-table">
    	<div className="content">
      		<table {...props} className="table is-fullwidth">
        		{props.children}
      		</table>
    	</div>
    </div>
  );
};
