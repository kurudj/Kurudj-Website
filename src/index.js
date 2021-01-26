import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class Doc extends React.Component{
  componentDidMount(){
    document.title = "ivan khurudzhi"
  }

  render(){
    return(
      <App />
    )
  }
}

ReactDOM.render(<Doc />, document.getElementById('root'))
