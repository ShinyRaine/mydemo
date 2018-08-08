import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import { observable, action } from 'mobx';
import {Provider, observer, inject} from 'mobx-react';

class Store {
  @observable list = [];
}
class Actions {
    constructor({store}) {
        this.store = store;
    }
    
    @action
    add = val => {
        this.store.list.push(val);
    }
}
const store = new Store();
const actions = new Actions({store});

@inject('store', 'actions')
@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }
    componentDidMount() {
    }
    handleInput = e => {
        this.setState({val: e.target.value})
    }
    add = () => {
        this.props.actions.add(this.state.val)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <input onChange={this.handleInput}/>
                <button onClick={this.add}>add</button>
                {this.props.store.list.map(item => <div style={{margin: 10}}>{item}</div>)}
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <Provider store={store} actions={actions}>
                <Home />
            </Provider>
        )
    }
}
const render = () => ReactDOM.render(
    <App/>, document.getElementById('app')
);

render();

// hot-reload
if (module.hot) {
    module.hot.accept();
}
