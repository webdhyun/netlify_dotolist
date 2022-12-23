import './App.css';
import { Component } from 'react';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      id:1,
    }
  }

  componentDidMount(){
    /*
    localStorage.setItem(
      "todos", JSON.stringify([
        { id: 1, text: '공부하기', checked: false },
        { id: 2, text: '요리하기', checked: false },
        { id: 3, text: '청소하기', checked: false }
      ])
    )
    */
    const todoList=localStorage.getItem("todos")
    //전에 저장해놓은 로컬스토리지 값을 불러옴
    if(todoList == null){//null값이면 종료
      return
    }
    //null값이 아닐경우 상태값이 넣어서 운용함
    this.setState({
      todoList:JSON.parse(todoList)
    })
  }

  onInsert = (text) => {
    //alert("추가!(App)")
    const {todoList,id} = this.state
    const todoObj = {id:id,text:text}
    const concatedList = todoList.concat(todoObj) 
    this.setState({
      todoList:concatedList
    })
    this.setState({
      id:id+1
    })

    //로컬스토리지에도 저장함 (영구 저장)
    localStorage.setItem(
      "todos", JSON.stringify(concatedList)
    )
  }

  onRemove = (id) => {
    //alert("삭제(TodoList)")
    //alert("삭제할 아이디:" + id)
    const {todoList} = this.state
    const filteredList = todoList.filter(
      (data)=>(data.id !== id)
    )
    this.setState({
      todoList:filteredList
    })

    localStorage.setItem(
      "todos", JSON.stringify(filteredList)
    )
  }
  
  onUpdate = (id,text) => {
    //alert("수정(TodoList)")
    //alert("넘겨받은 아이디:" + id)
    //alert("넘겨받은 할일:" + text)

    const updatedObj = { id:id,text:text }
    const {todoList} = this.state
    const updatedList = todoList.map(
      (data) => (data.id === id) ?
        ({...updatedObj }) : data
    )

    this.setState({
      todoList:updatedList
    })

    localStorage.setItem(
      "todos", JSON.stringify(updatedList)
    )
  }

  checkDone=(id,checked)=>{
    //alert("완료 체크!(App)")
    const {todoList} = this.state
    const updatedList = todoList.map(
      (data) => (data.id === id) ?
        ({...data,checked:!checked}) : data
    )

    this.setState({
      todoList:updatedList
    })

    localStorage.setItem(
      "todos", JSON.stringify(updatedList)
    )
  }

  render() {
    const {todoList} = this.state
    return(
      <div className="App">
          <h1>-- To Do List -- </h1>
          
          <TodoInsert onInsert={this.onInsert} />
          <TodoList todoList={todoList}
          onRemove={this.onRemove} 
          onUpdate={this.onUpdate}
          checkDone={this.checkDone}
          />
      </div>
    );
  }
}

export default App;
