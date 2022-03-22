import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Button was clicked ")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick = () => {
        console.log("Button was clicked ")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleOnChange = (event) => {
        console.log("On Change was Clicked Bro Take Care")
        setText(event.target.value)
    }
    const handleClickClear = (event) => {
       setText("")
       props.showAlert("Text Cleared Succesfully","success")
    }
    const handleCopytoClip = (event) => {
        navigator.clipboard.writeText(text)
        alert("Copied to clipboard")
        props.showAlert("Succesfully copied to clipboard","success")
    } 
   
    const handleRemoveSpace = (event) => {
        var newText = text.replace(/ +/g, "");
        setText(newText)
    } 
    const [text , setText ] = useState ('') 
    return (
        <>
        <div className="container" style={{backgroundColor: props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value= {text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey' , color : props.mode==='light'?'black':'white'}}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClickClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopytoClip}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Spaces</button>
        </div>
        <div className="container my-2" style={{backgroundColor: props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'}}>
            <h1>Your life summary</h1>
            <p> {text.split(" ").filter((element) => {return element.length!==0 }).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element) => {return element.length!==0 }).length} Minutes read</p>
            <h2>Privew</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
