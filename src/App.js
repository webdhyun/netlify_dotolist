
import './App.css';
import{Component} from 'react';
import Todo from './components/Todo.js';
import InputComp from './components/InputComp.js';

class App extends Component{
  constructor(props){ //생성자
    //생성자: 객체가 생성될때 호출되는것
    super(props) //상위클래스 생성자 호출()
    this.state={
      //상태값
      todoList:[
        {id:1, text:'공부하기'},
        {id:2, text:'청소하기'},
        {id:3, text:'요리하기'}
      ],
      id:4

    }
  }
  addTodo=(input)=>{
    alert("추가!(App)")
    alert(input) //InputComp에서 입력한 데이터
    const todoObj={id:this.state.id,text:input}
    //{id:4,text:'영화보기'}
    const concatList = this.state.todoList.concat(todoObj)
    //concat은 배열에 항목 추가하고 그 추가된 배열이 return
    this.setState({
      todoList:concatList//추가된 배열을 setState로 기본 배열 상태변경
    })
  }

  delTodo=(id)=>{
    alert("삭제!(App)")
    alert(id)//1,2,3
    //filter
    const filteredList=this.state.todoList.filter(
      (data)=>(data.id !== id)
    )
    //todoList배열에 있는 id랑 함수 매개변수로 넘어온 아이디랑 일치하지 않는
    //애열 원소만 리턴해서, 새로운 배열 생성
    this.setState({
      todoList:filteredList
    }) //setState -> render

  }

  updateTodo=(id,text)=>{ //매개변수 
    alert("수정(App.js)")
    alert("id:"+id)
    alert("text:"+text)
    //
    //this.state.todoList.length
    /*
    const {todoList}=this.state  
    //상태값옮겨서 쓰기
    //비구조화할당, 구조분해 할당 (ES6)
    const len=todoList.length
    for(var i=0; i<len; i++){
      if(todoList[i].id === id){
        alert("찾았다!")
        alert(todoList[i].text) //공부하기(원본)
        todoList[i].text=text
      }
      
    }
    this.setState({  //바뀐값 저장
      todoList:todoList
    })

  */

 //삼항연산자로..
 const updateTodoList = this.state.todoList.map(
 (data)=> (data.id ===id)? ({id:id,text:text}):data
 )
 //({...data,text:text})
 //... - 삼점 연산자 (three dot operator)
 //... - spread, rest
 // A? B:C

 this.setState({  //바뀐값 저장
  todoList:updateTodoList
})
}
  render(){ //라이프사이클 함수

    const result = this.state.todoList.map(
      (data)=>(<Todo 
        key={data.id}
        id={data.id} 
        text={data.text}
        delTodo={this.delTodo}
        updateTodo={this.updateTodo}
        />)
    )
    //map메서드로 맵핑

    return(
      <div id="App">
        <InputComp addTodo={this.addTodo}/>
        {result}
 
      </div>
    )
  }


}



export default App;
