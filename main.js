import { createElement, Component, render } from './toy-react.js';
class MyComponent extends Component{
  render() {
    return <div>
        <h1>My Component</h1>
        {this.children}
      </div>
  }
}

render(<MyComponent class="c" id="a">
  <div>2333</div>
  <div/>
  <div/>
</MyComponent>, document.body);