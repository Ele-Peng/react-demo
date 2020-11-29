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
        <button onclick={() => {
          this.setState({
            a: this.state.a + 1
          })
        }}>add</button>
        <div>{this.state.a.toString()}</div>
        <div>{this.state.b.toString()}</div>
        {this.children}
      </div>
  }
}

render(<MyComponent class="c" id="a">
  <div>2333</div>
  <div/>
  <div/>
</MyComponent>, document.body);