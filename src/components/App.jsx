import React, {Component} from "react";

import Container from './Container/Container'
import Notification from './Notification/Notification'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handelClick = (e) => {
       const { name } = e.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  }

  countPositiveFeedbackPercentage = () => {
    return parseInt(
       (100 / this.countTotalFeedback(this.state)) * this.state.good
    )
    
  }

  render() {
      const {good, neutral, bad} = this.state
    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handelClick}
            />
            </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />
            ) : ( <Notification message="There is no feedback"/>)}
          
           
          </Section>
        </Container>
        </>
    )
  }
}

export default App;