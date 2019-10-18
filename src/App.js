import React, { Component } from 'react'
import './App.css';
import SearchForm from './components/SearchForm';
import DataContext from './DataContext';
import search from './API';
import ResultList from './components/ResultsList';



export default class App extends Component {
  static contextType = DataContext
  state = {
    resultsList: null,
    loading: null
  }

  handleSearch = (formstate) => {
    this.setState({loading: true})
    search(formstate.type, formstate.query)
      .then(data => this.setState({
        resultsList: data.results
      }))
      .then(() => this.setState({ loading: false }))
      .catch(err=>console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Search</h1>
        </header>
        <main className="main">
          <DataContext.Provider value={this.state}>
            <SearchForm handleSearch={this.handleSearch} />
            {this.state.loading && <h2><code>Loading...</code></h2>}
            {this.state.resultsList && <ResultList />}

          </DataContext.Provider>

        </main>
      </div>
    )
  }
}
