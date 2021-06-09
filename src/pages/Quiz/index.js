import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css';
import questionsData from "./../../utils/questions.json";

function Quiz() {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(false)
  const [quest, setQuest] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [doneQuiz, setDoneQuiz] = useState(false);

  const clickOptions = (option, correct) => {
    setAnswer(option);
    setCorrect(correct);
  }

  const nextQuest = () => {
    if(correct){
      setCorrectAnswer(correctAnswer + 1)
    }
    setQuest(quest + 1)
  }

  const resultQuiz = () => {
    if(correct){
      setCorrectAnswer(correctAnswer + 1);
    }
    setDoneQuiz(true);
  }

  const quiz = questionsData;

  return (
    <div className="App bg-primary">
        <Container style={{height: "100vh"}}>
          <Row className="justify-content-center align-items-center" style={{height: "100%"}}>
            <Col md="8">
              <Card bg="light">
                {
                  function (){
                    if(doneQuiz){
                      return (
                        <>
                          <Card.Header>
                            <h5 className="fw-bold">Quiz Web Application</h5>
                          </Card.Header>
                          <Card.Body>
                            <Card.Title>Result Quiz :</Card.Title>
                            <Card.Title>{correctAnswer} Correct Answer for {quiz.length} Questions</Card.Title>
                          </Card.Body>
                          <Card.Footer>
                            <Link className="btn btn-primary" to="/"><i className="bi bi-house-fill mr-2"></i>Back Home</Link>
                          </Card.Footer>
                        </>
                      )
                    } else {
                      return (
                        <>
                        <Card.Header className="d-flex py-3 justify-content-between align-items-center">
                          <h5 className="fw-bold">Quiz Web Application</h5>
                          <h6 className="fw-bold">{quest + 1} of {quiz.length} Questions</h6>
                        </Card.Header> 
                        <Card.Body className="text-left">
                                <Card.Title as="h5" className="fw-bold">{quiz[quest].question}</Card.Title>
                                <div id="options" className="mt-4">
                                  {
                                    quiz[quest].options.map((option, i) => {
                                      return (
                                        <Card
                                          className={`mb-3 option ${answer === option.answer? "option-active" : ""}`} 
                                          onClick={()=>clickOptions(option.answer, option.correct)} 
                                          key={i}
                                        >
                                          <Card.Body>{option.answer}</Card.Body>
                                        </Card>
                                      )
                                    })
                                  }
                                </div>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-center py-3">
                          {
                            function() {
                              if (quiz.length === quest+1) {
                                return (
                                  <Button to="/" className="btn btn-primary w-100" onClick={resultQuiz}>
                                    Done
                                  </Button>
                                )
                              } else {
                                return (
                                  <Button className="btn btn-primary w-100" onClick={nextQuest}>
                                    Next
                                    <i className="bi bi-arrow-right ml-2"></i>  
                                  </Button>
                                )
                              }
                            }()
                          }
                        </Card.Footer>
                        </>
                      )
                    }
                  }()
                }
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Quiz;
