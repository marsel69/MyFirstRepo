import React from 'react';


const AppHeader = ({toDo, done}) => {
    return ( 
       <div className="container">
        <div className="row ">
            <div className="col-6">
                <h1>My todo list</h1>
            </div>
            <div className="col-6 mt-3 text-secondary">
                <h4>{toDo} active, {done} done</h4>
            </div>
        </div>
       </div>
    );
    }

export default  AppHeader;