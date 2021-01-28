import React from 'react'
import Course from './Course'
import Arrow from './Arrow.png'

class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [["CS 200", "Programming 1 (Java)", "Fall 2019"],
                ["CS 240", "Discrete Mathematics", "Spring 2020"],
                ["CS 252", "Computer Engineering", "Fall 2020"],
                ["CS 300", "Programming 2 (Java)", "Spring 2020"],
                ["CS 354", "Machine Organization and Programming (C/Assembly) ", "Spring 2021"],
                ["CS 400", "Programming 3 (Java, HTML, CSS)", "Summer 2020"],
                ["CS 540", "Intro to Artificial Intelligence", "Fall 2020"],
                ["Math 221", "Calculus 1", "Fall 2019"],
                ["Math 222", "Calculus 2", "Spring 2020"],
                ["Math 234", "Calculus 3", "Summer 2020"],
                ["Math 341", "Linear Algebra", "Fall 2020"],
                ["Math 309", "Statistics and Probability", "Spring 2021"],
                ["Math 540", "Linear Algebra 2", "Spring 2021"]]
    this.index = 0
    this.state = {
        courseName: this.arr[this.index][0],
        detailedName: this.arr[this.index][1],
        term: this.arr[this.index][2],
    }
  }

  moveRight = () => {
      this.index = this.index+1;
      if(this.index==13){
        this.index = 0;
      }
      this.setState({
        courseName: this.arr[this.index][0],
        detailedName: this.arr[this.index][1],
        term: this.arr[this.index][2],
      });
  }

  moveLeft = () => {
      this.index = this.index-1;
      if(this.index==-1){
        this.index = 12;
      }
      this.setState({
        courseName: this.arr[this.index][0],
        detailedName: this.arr[this.index][1],
        term: this.arr[this.index][2],
      });
  }

  render() {
    return (
      <div id="thirdel">
        <a onClick={this.moveLeft}><img src={Arrow} id="arrowleft"/></a>
        <a onClick={this.moveRight}><img src={Arrow} id="arrowright"/></a>
        <div id="course">
          <div>
            <Course courseName={this.state.courseName} detailedName={this.state.detailedName} term={this.state.term} />
          </div>
        </div>
      </div>
    )
  }
}

export default Middle
