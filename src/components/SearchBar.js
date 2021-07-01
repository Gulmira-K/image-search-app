import { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.term)
    
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              onChange={e => this.setState({ term: e.target.value })}
              // We should pass the updated state to save it in react component instead of DOM
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}