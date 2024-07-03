'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// How to make components - Video NO.: 4
// ( دورة كاملة لتدريبك لسوق العمل فى مجال الويب ) React Tutorial#4 - Component- Structure List App

// props = properities (attributes) for the components, such ass <img src=""/> .  
// props  name="value"
//props  pass data via a component (parent) to another component (child)

var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello() {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
    }

    _createClass(Hello, [{
        key: 'render',
        // classsssssssssssssssssssss
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Hello Components'
            );
        }
    }]);

    return Hello;
}(React.Component);

;

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    // classsssssssssssssssssssss  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AAAAAAAAAApppppppppppp
    function App() {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this2.state = {
            products: [],
            item: ''
        };

        // this.change_input_val = (e) => {
        //      this.setState({item: e.target.value});
        // };

        _this2.change_input_val = _this2.change_input_val.bind(_this2); // a different way to define a method of a class or a function of a class

        _this2.submit_form = function (e) {
            e.preventDefault();
            var products = [].concat(_toConsumableArray(_this2.state.products), [{ id: Math.random(), name: _this2.state.item }]);
            if (_this2.state.item != '') _this2.setState({ products: products,
                item: ''
            });
        };

        _this2.deleteItem = function (id) {
            var products = [].concat(_toConsumableArray(_this2.state.products));
            var newproducts = products.filter(function (product) {
                return product.id != id;
            });
            _this2.setState({ products: newproducts });
        };
        return _this2;
    }

    _createClass(App, [{
        key: 'change_input_val',
        value: function change_input_val(e) {
            this.setState({ item: e.target.value });
        }
    }, {
        key: 'render',


        // App Render *********
        value: function render() {
            console.log(this.state.products);
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(
                    'h2',
                    null,
                    'The List'
                ),
                React.createElement(Header, { test: '', val: 'icon' }),
                React.createElement(Listitems, { products: this.state.products,
                    removeItem: this.deleteItem
                }),
                React.createElement(Additem, { change_input: this.change_input_val,
                    save_data: this.submit_form,
                    clearItem: this.state.item
                })
            );
        }
    }]);

    return App;
}(React.Component);

;

var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        // classsssssssssssssssssssss
        value: function render() {
            console.log(this); //Header
            console.log(this.props.test);
            // return <header> {this} </header>;  // Writing only 'this' bw curly braces without .props.test or .props.val give an error
            return React.createElement(
                'div',
                null,
                ' ',
                this.props.test,
                ' '
            );
        }
    }]);

    return Header;
}(React.Component);

;

var Listitems = function (_React$Component4) {
    _inherits(Listitems, _React$Component4);

    function Listitems() {
        _classCallCheck(this, Listitems);

        return _possibleConstructorReturn(this, (Listitems.__proto__ || Object.getPrototypeOf(Listitems)).apply(this, arguments));
    }

    _createClass(Listitems, [{
        key: 'render',
        // classsssssssssssssssssssss
        value: function render() {
            var _this5 = this;

            console.log(this);
            return React.createElement(
                'div',
                null,
                this.props.products.length == 0 && React.createElement(
                    'div',
                    null,
                    'Add something to "To Do List"'
                ),
                this.props.products.map(function (product) {
                    return React.createElement(Item, { id: product.id,
                        item: product.name,
                        removeItem: _this5.props.removeItem
                    });
                })
            );
        }
    }]);

    return Listitems;
}(React.Component);

;

var Item = function (_React$Component5) {
    _inherits(Item, _React$Component5);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        // classsssssssssssssssssssss
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                this.props.item,
                React.createElement(
                    'button',
                    { 'class': 'btn', onClick: function onClick() {
                            return _this7.props.removeItem(_this7.props.id);
                        } },
                    'Delete'
                )
            );
        }
    }]);

    return Item;
}(React.Component);

;

var Additem = function (_React$Component6) {
    _inherits(Additem, _React$Component6);

    function Additem() {
        _classCallCheck(this, Additem);

        return _possibleConstructorReturn(this, (Additem.__proto__ || Object.getPrototypeOf(Additem)).apply(this, arguments));
    }

    _createClass(Additem, [{
        key: 'render',
        // classsssssssssssssssssssss
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.save_data },
                React.createElement('input', { type: 'text',
                    onChange: this.props.change_input,
                    value: this.props.clearItem

                }),
                React.createElement('input', { type: 'submit' })
            );
        }
    }]);

    return Additem;
}(React.Component);

;

//#####################################################################################################################################################################
var content = React.createElement(
    'div',
    { className: '' },
    React.createElement(Hello, null),
    React.createElement(
        Hello,
        null,
        React.createElement(
            'p',
            null,
            'This is P'
        )
    )
);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
