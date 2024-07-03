
// How to make components - Video NO.: 4
// ( دورة كاملة لتدريبك لسوق العمل فى مجال الويب ) React Tutorial#4 - Component- Structure List App

// props = properities (attributes) for the components, such ass <img src=""/> .  
// props  name="value"
//props  pass data via a component (parent) to another component (child)

class Hello extends React.Component {  // classsssssssssssssssssssss
    render() {
        return <div>Hello Components</div>;
    };
};


class App extends React.Component {  // classsssssssssssssssssssss  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AAAAAAAAAApppppppppppp
    constructor() {
        super();
        this.state = {
                      products: [],
                      item: '',
                     };

        // this.change_input_val = (e) => {
        //      this.setState({item: e.target.value});
        // };

        this.change_input_val = this.change_input_val.bind(this);  // a different way to define a method of a class or a function of a class

        this.submit_form = (e) => {
            e.preventDefault();
            let products = [...this.state.products, {id: Math.random(), name: this.state.item}];
            if (this.state.item != '')
                this.setState({products: products,
                               item: '',
                              });
            
        };

        this.deleteItem = (id) => {
            let products = [...this.state.products];
            let newproducts = products.filter(product => product.id != id);
            this.setState({products: newproducts});
        };
    };

     change_input_val (e) {
             this.setState({item: e.target.value});
        };

    // App Render *********
    render() {
        console.log(this.state.products)
        return <div className="app">
                    <h2>The List</h2>
                    <Header test="" val="icon"/> 
                    <Listitems products={this.state.products}
                               removeItem={this.deleteItem}
                    />

                    <Additem change_input={this.change_input_val} 
                             save_data={this.submit_form}
                             clearItem={this.state.item}
                    />
                    
                </div>;
    };
};



class Header extends React.Component {  // classsssssssssssssssssssss
    render() {
        console.log(this);  //Header
        console.log(this.props.test);  
        // return <header> {this} </header>;  // Writing only 'this' bw curly braces without .props.test or .props.val give an error
        return <div> {this.props.test} </div>;
    };
};

class Listitems extends React.Component {  // classsssssssssssssssssssss
    render() {
        console.log(this);
        return <div>
                {this.props.products.length == 0 && <div>Add something to "To Do List"</div>}
                {
                    this.props.products.map(product => <Item id={product.id}
                                                             item={product.name}
                                                             removeItem={this.props.removeItem}
                                                        /> 
                                            )  
                }
               </div>
                                                             
    };
};

class Item extends React.Component {  // classsssssssssssssssssssss
    render() {
        return <div>
                    {this.props.item}
                    <button class="btn" onClick={() => this.props.removeItem(this.props.id)}>Delete</button>
                </div>;
    };
};


class Additem extends React.Component {  // classsssssssssssssssssssss
    render() {
        return (
            <form onSubmit={this.props.save_data}>
                <input type='text' 
                       onChange={this.props.change_input} 
                       value={this.props.clearItem} 

                />
                
                <input type='submit' />
            </form>

        );
    };
};



//#####################################################################################################################################################################
let content = (

    <div className="">
        <Hello/>
        <Hello><p>This is P</p></Hello>

    </div>

);

ReactDOM.render(<App/>, document.getElementById('app'));


