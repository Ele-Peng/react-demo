import { createElement, Component, render } from './toy-react.js';
class MyComponent extends Component{
  constructor() {
    super();
    this.state = {
      a: 12333,
      b: 2
    }
  }
  render() {
    return <div>
        <h1>My Component</h1>
        <span>{this.state.a.toString()}</span>
        {this.children}
      </div>
  }
}

render(<MyComponent class="c" id="a">
  <div>2333</div>
  <div/>
  <div/>
</MyComponent>, document.body);