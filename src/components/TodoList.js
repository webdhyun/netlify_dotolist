import '../css/TodoList.css';
import { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {

        }
    }
    
    onRemove = (id) => {
        //alert("삭제(TodoList)")
        //alert("삭제할 아이디(TodoList):"+id)
        this.props.onRemove(id)
    }
      
     onUpdate = (id,text) => {
         //alert("수정(TodoList)")
         //alert("넘겨받은 아이디:" + id)
         //alert("넘겨받은 할일:" + text)
         this.props.onUpdate(id,text)
    }

    checkDone=(id,checked)=>{
      //alert("완료체크(TodoList)")
      this.props.checkDone(id,checked)
    }

    render() {
      const {todoList} = this.props
      const result = todoList.map(
          (data, index) => (<Todo key={index}
              id={data.id} text={data.text}
              checked = {data.checked}
              onRemove={this.onRemove}
              onUpdate={this.onUpdate}
              checkDone={this.checkDone}
          />)
      )
    return(
      <div className="todo-list">
            {result}
      </div>
    );
  }
}

export default TodoList;
