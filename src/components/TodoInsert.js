import '../css/TodoInsert.css';
import { Component } from 'react';
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoInsert extends Component {

  constructor(props) {
    super(props)
    this.state = {
        text:''
    }
  }

  onInsert = () => {
    //alert("추가!(TodoInsert)")
    const {text}=this.state

    const trim_text=text.trim()
    if(trim_text===''){
      alert('값을 입력하세요!')
      return
    }

    this.props.onInsert(text)
    this.setState({
      text:''
    })
  }

  textChange = (e) => {
    this.setState({
        text:e.target.value    
    })
  }

  render() {
    const {text}=this.state
    return(
      <div className="todo-insert">
        <input type='text' onChange={this.textChange}
           value={text} placeholder='할일 입력'/>
          <button onClick={this.onInsert}>
            <FontAwesomeIcon icon={faAdd} />
          </button>
      </div>
    );
  }
}

export default TodoInsert;
