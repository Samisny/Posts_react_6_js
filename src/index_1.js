
// This file includes two inputes that one of them is a type of button. It get what you type and list them as well as 
// toggle game that shows a text and hide it. This file will be renamed to index_1.js instead of index.js that give 
// an easy chance to re-rename it again to index.js then it can be run.


let val;
let handleinputchange = (e) => { 
    val = e.target.value; 
    // clearinp.find(input:text).val('');
    // getElementsByClassName(clearinp).val('');
    // console.log(val);
};

let items = [];
let handleformsubmit = (e) => {
    e.preventDefault();
    items.push(val);
    console.log(items);
    e.target.elements[0].value= '';
    render();

};

// Toggle text variables that one of them includes a function:
let toggle = false;
var toggletext = () => {
    toggle = !toggle;
};

function render () {
    
    console.log(toggle);

    let content = (

        <div>
            <button onClick={toggletext}>Toggle Text</button>
            {toggle ? <p>This is the Text</p> : ""}
            <h1>Hello React</h1>
            <form onSubmit={handleformsubmit}>
                <input type="text" class="clearinp" onChange={handleinputchange} />
                <input type="submit" />
            </form>
    
            <ul>
                {items.length ? items.map( (item) => <li>{item}</li>)  : "" }
            </ul>
        </div>
    
    );
    ReactDOM.render(content, document.getElementById("app"));
};

render();
render2();

