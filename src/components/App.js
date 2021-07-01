import { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash'

class App extends Component{
  state = {
  images: [],
  }
  
  
  // Arrow function is used in order to avoid an error of THIS:SETSTATE
  handleSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      },
     
    });
       this.setState({ images: response.data.results });
  }

  // PROMISE BASED SYNTAX THAT USED .THEN STATEMENT (PROMISE BASED)
  // handleSubmit = (term) => {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: {
  //       query: term
  //     },
  //     headers: {
  //       Authorization: 'Client-ID Ql2MUOiAzVE-PjzAC8ebmCWfYm9_2U9CzhSZAT22JeY'
  //     }
  //   }).then(response => console.log(response.data.results[0].urls.regular))
      
  // }

  render() {
    return (
      <div className="App" style={{ marginTop: '10px' }}>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ImageList images={this.state.images} />
       </div>
    );
  }
}
export default App;
