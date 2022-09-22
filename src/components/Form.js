
function Form(props) {

 


    function handleChange(event) {
        const {value} = event.target
        props.setVal(prevVal => value)
    }

  return (
    <div className="form-container">
    <form className="form" >
        <input 
            type="list" 
            placeholder="Enter list's elements"
            className="form--input"
            name="list"
            value={props.val}
            onChange={handleChange}
        />
        
        
    </form>
</div>
  )
}

export default Form