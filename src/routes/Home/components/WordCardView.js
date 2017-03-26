import React from 'react'
import Card from 'components/Card'
import './WordCardView.scss'

const answerCard =  (props) => (
  <div key="answerCard" className="card-content collection white">
    <form className="choices">
      {
        props.choices.map((choice, i) => {
          return (
            <p key={choice.word} className="collection-item choice">
              <input className="with-gap" type="radio" id={"test" + i} onChange={props.selectIt.bind(null, choice.word)} checked={choice.word === props.selectedChoice} />
              <label htmlFor={"test" + i} className={props.error ? (choice.word === props.word ? "correct" : choice.word === props.selectedChoice ? "error" : "") : ""}>{choice.def}</label>
            </p>
          )
        })
      }
    </form>
  </div>
);

const sentenceCard = (props) => (
  <div key="sentenceContent" className="card-image card-content white-text sentences">
    {
      props.sentences.map((sen, i) => {
        return <p className="sentence" key={i} style={i > 0 && !props.showMoreSentences ? {display: "none"} : {}}>{sen}</p>
      })
    }
    <span className="card-title word-name">{props.word}</span>
    <a onClick={props.toggleMore} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">{props.showMoreSentences ? "expand_less" : "expand_more"}</i></a>
  </div>
)

const cardAction =  (props) => (
  <div className="card-action white">
    <a onClick={props.prevWord}>Previous</a>
    <a onClick={props.nextWord}>Next</a>
  </div>
);


const WordCardView = (props) => {
  let cardProps = {...props, contents: [ sentenceCard(props), answerCard(props)], action: cardAction(props)};
  return (
    <div className="row oneWord">
      <div className="col s12 m6">
        <Card  {...cardProps} />
      </div>
    </div>
  );
};

export default WordCardView
