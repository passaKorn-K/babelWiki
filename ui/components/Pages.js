
// Pages.js
import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class Pages extends Component {

    state = {
      pages: []
    }

    componentDidMount() {
      fetch('http://127.0.0.1:5000/api/v1/pages')
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
    }
    
  render() {
    return (
      <table className='table'>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pages.map((page) => (
              <tr key={page.id}>
                <th>{page.id}</th>
                <td>{page.title}</td>
                <td>
                  <a href='javascript:void(0)'>Show</a>
                </td>
              </tr>
            ))
          }
         
        </tbody>
      </table>
    )
  }
}

export default Pages