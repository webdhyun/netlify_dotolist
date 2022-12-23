import '../css/Todo.css';
import { Component } from 'react';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Todo extends Component {

  constructor(props) {
    super(props)
      this.state = {
        text:this.props.text,
        edit:false
    }
  }

   onRemove = () => {
       //alert("삭제(Todo)")
       const {id}=this.props
       this.props.onRemove(id)
   }
    
   onUpdate = () => {
       //alert("수정(Todo)")
       const { id } = this.props
       const { edit, text } = this.state
       if (edit === true) {
           this.props.onUpdate(id,text)
       }
       this.setState({
           edit:!edit
       })
    }
    
    textChange = (e) => {
        this.setState({
            text:e.target.value
        })
    }

    checkDone=()=>{
      //alert("완료 체크!(Todo)")
      const { id, checked } = this.props
      this.props.checkDone(id,checked)
    }
    
  render() {
     const { id, text, checked } = this.props
     const { edit } = this.state
     if (edit === false) {
        return(
            <div className="todo">
              <div className='todo-area'>
                  <span>
                      <input type='checkbox'
                      onClick={this.checkDone}/>
                  </span>  
                  <span> </span>  
                  <span className={checked? 'done' : null}>{text}</span>   
              </div>
              <div className='btn-area'>
                  <button onClick={this.onRemove}>
                  <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button onClick={this.onUpdate}>
                  <FontAwesomeIcon icon={faPen} />
                  </button>
              </div>   
            </div>
          );
     } else if (edit === true) {
        return(
            <div className="todo">
              <div className='todo-area'>
                  <span>
                      <input type='checkbox'/>
                  </span>  
                  <span> </span>  
                  <span>
                    <input type='text' defaultValue={text}
                        onChange={this.textChange} />
                  </span>   
              </div>
              <div className='btn-area'>
                  <button onClick={this.onRemove}>
                  <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button onClick={this.onUpdate}>
                  <FontAwesomeIcon icon={faPen} />
                  </button>
              </div> 
            </div>
          );
     }
    
  }
}

export default Todo;
