import React from 'react';
import './todo-list-items.css';
class TodoListItem extends React.Component {
   
    render() {
        const {label, onDeleted,
             onToggleImportant,
              onToggleDone, done, important }= this.props;
        let classNames ='item-list-base';
        if (important){
            classNames+= " important";
        }
        if (done){
            classNames+= " done";
        }
    
    return (
        <span className={classNames}>
        <span

        onClick={onToggleDone}>
        {label}
        </span>
        
        <div className='d-flex justify-content-end'>
        <button type="button"
            className="btn btn-outline-success float-right"
            onClick={onToggleImportant}>
            <i className="fa fa-exclamation"/>
        </button>

        <button type="button"
            className="btn btn-outline-danger float-right"
            onClick={onDeleted}>
            <i className="fa fa-trash-o"/>
        </button>
        </div>
        </span>
    );
}
}
export default  TodoListItem;