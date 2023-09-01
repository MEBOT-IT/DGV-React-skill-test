import React,{useState}from 'react'

function Assignment4() {
    var [number, setNumber] = useState([]);
    var [textt, setTextt] = useState("");
    var click = () => {
      if (textt.trim() !== "") {
        setNumber([...number, { text: textt.trim(), checked: false }]);
        setTextt("");
      }
    };
    var handleDelete = (arrr) => {
      var deleteKey = [...number];
      deleteKey.splice(arrr, 1);
      setNumber(deleteKey);
    };
  
    var handleButton = (arr) => {
      var buttonKey = [...number];
      buttonKey[arr].checked = !buttonKey[arr].checked;
      setNumber(buttonKey);
    };
    return (
      <div style={{
          marginLeft: `500px`,
          marginTop: `200px`,
        }}>
        <h1>To Do List</h1>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={textt}
          onChange={(e) => setTextt(e.target.value)}
          style={{
            borderStyle: `groove`,
          }}
        />
        <button
          onClick={click}
          style={{
            backgroundColor: `blue`,
            marginLeft: `10px`,
            fontWeight: `bold`,
            color: `beige`,
            height: `25px`,
            width: `50px`,
            borderStyle: `hidden`,
            borderRadius: `5px`,
          }}
        >
          Add
        </button>
        <ul>
          {number.map((todo, val) => (
            <li
              style={{
                listStyleType: `none`,
                marginTop: `10px`,
              }}
            >
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleButton(val)}
              />
              <span
                style={{
                  textDecoration: todo.checked ? `line-through` : `none`,
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDelete(val)}
                style={{
                  backgroundColor: `blue`,
                  marginLeft: `10px`,
                  height: `25px`,
                  width: `55px`,
                  borderStyle: `hidden`,
                  borderRadius: `5px`,
                  fontWeight: `bold`,
                  color: `beige`,
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }


export default Assignment4
