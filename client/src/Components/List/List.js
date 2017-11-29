import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="card-table">
    	<div className="content">
      		<table className="table is-fullwidth is-striped">
        		{children}
      		</table>
    	</div>
    </div>
  );
};
