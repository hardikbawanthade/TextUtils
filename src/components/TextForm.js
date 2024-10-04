import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to UpperCase","success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to LowerCase","success");
  }

  const handleOnClear = () => {
    let newText = '';
    setText(newText);
  }

  const handleCopy = () => {
    let text = document.querySelector("#MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#0b2750'}}>
        <h1>{props.heading}</h1>

    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#0a58ca':'light',color: props.mode === 'dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to upperCase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}  >Convert to lowerCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 mx-1" onClick={handleSpace}>Remove Spaces</button>
    </div>

    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#0b2750'}}>
    <h2 className='my-2'>Your Text Summary</h2>
    <h6>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} Words, {text.length} Character</h6>
    <h6>{0.008 * text.split(" ").filter((ele) => {return ele.length !== 0}).length }</h6>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

    </>
  )
}
