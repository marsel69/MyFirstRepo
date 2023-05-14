// import { StrictMode }  from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

// import { createRoot } from 'react-dom/client';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemsFilter from './components/items filter';
import ItemAddForm from './components/item-add-form';


class App extends React.Component {

    maxId=100;
    
    state = {
 todoData : [
        this.createTodoItem('Wake Up'),
        this.createTodoItem('Drink tea'),
        this.createTodoItem('Eat breakfast'),
   ]
};

    createTodoItem(label) {
        return {
            label, 
            important: false,
            id: this.maxId++,
            done:false
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) =>{
        const indx = todoData.findIndex((el) => el.id ===id);
        const before = todoData.slice(0,indx);
        const after = todoData.slice(indx+1);
        const newArray = [...before, ...after];
        return {
            todoData: newArray
        };
    });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
    
        this.setState(({todoData})=>{
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };
    onToggleImportant = (id) =>{
        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id ===id);
            const oldItem = todoData[indx];
            const newItem = {...oldItem, important: !oldItem.important};
            const before = todoData.slice(0,indx);
            const after = todoData.slice(indx+1);
            const newArray = [...before,newItem, ...after];
            return {
                todoData: newArray
            };
           });
    }
    onToggleDone = (id) =>{
       this.setState(({todoData}) => {
        const indx = todoData.findIndex((el) => el.id ===id);
        const oldItem = todoData[indx];
        const newItem = {...oldItem, done: !oldItem.done};
        const before = todoData.slice(0,indx);
        const after = todoData.slice(indx+1);
        const newArray = [...before,newItem, ...after];
        return {
            todoData: newArray
        };
       });
    }
    
    render(){

        const doneCount = this.state.todoData
                        .filter((el)=>el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
   return(
    <div className="container" style={{maxWidth: 800}}>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="row pt-2 pb-2">
            <div className="col-6">
            <SearchPanel/>
            </div>
            <div className="col-6">
            <ItemsFilter/>
            </div>
        </div>
       
        <TodoList todos =
         {this.state.todoData}
         onDeleted ={ this.deleteItem}
         onToggleDone = {this.onToggleDone}
         onToggleImportant = {this.onToggleImportant}/>
         <ItemAddForm onAddItem={this.addItem}/>
    </div>
   );
    }
};


// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//     <StrictMode>
//     <App />
//     </StrictMode>
// );


ReactDOM.render(<App/>, document.getElementById("root"));