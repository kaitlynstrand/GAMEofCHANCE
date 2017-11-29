import React from "react";

const AddTaskForm = props => (
<div>
	<br></br>
	<div className="field">
		<label className="label">Description</label>
			<div className="control">
				<input className="input"></input>
			</div>
	</div>
	<div class="field">
        <label class="label">Due Date</label>
            <div class="control">
              	<input id="date" class="input" type="date"></input>
            </div>
    </div>
    <div class="field">
        <label class="label">Points</label>
            <div class="control">
                <input id="points" class="input" type="text"></input>
            </div>
    </div>
    <div>
    	<button id="submit-task" type="submit" class="button"><a href="/claim">Submit</a></button>
    </div>
</div>
	)

export default AddTaskForm