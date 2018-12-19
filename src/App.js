import React, {
  Component
} from 'react';
import Header from './components/header'
// import './App.css'
import office from './office.json'
import Card from './components/card'
import Wrapper from "./components/Wrapper"


class App extends Component {

  state = {
    cards: office,
    cardSelections: [],
    currentScore: 0,
    topScore: 0,
    message: 'Welcome to THE CLICKY GAME'
  }

  randomizeArray = () => {
    let currentArray = this.state.cards
    currentArray.sort(function (a, b) {
      return 0.5 - Math.random()
    })
    this.setState({
      array: currentArray
    })
  }

  guessClick = (event) => {
    console.log('hello')
    console.log(event.target.name)
    let selectionCopy = this.state.cardSelections.slice()
    let tempScore = this.state.currentScore

    tempScore = tempScore + 1 
    this.setState({
      currentScore: tempScore
    })
    

    if (selectionCopy.length < 1) {
      console.log('counter ran')
      selectionCopy.push(event.target.name)
      this.setState({
        message: "You Guessed Correctly!"
      })
     
    } else {
      for (var i = 0; i < this.state.cardSelections.length; i++) {
        if (this.state.cardSelections[i] === event.target.name) {
          console.log("Already guessed: ", event.target.name)
          this.setState({
            message: "You Lose! Try Again",
            cardSelections: [],
            currentScore: 0
          })
          selectionCopy = []
          break
        } else {
          selectionCopy.push(event.target.name)
          this.scoreCounter()
        }
      }
    }
    
    
    this.setState({
      cardSelections: selectionCopy
    })
    console.log(this.state.cardSelections)
    this.randomizeArray()
    this.scoreCounter()
  }

  scoreCounter = () => {
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore 
      })
    }
  }

  render() {
    return ( 
    <>
      <Header message={this.state.message} currentScore={this.state.currentScore} topScore={ this.state.topScore }/> 
      <Wrapper> 
        {this.state.cards.map((worker, index) => ( 
          <Card 
            onPress={this.guessClick} 
            key={index} 
            name={worker.name}
            image={worker.image}/>
        ))} 
      </Wrapper>  
    </>  
    );
  }
}

export default App;