import React from "react"
import styled from "styled-components"
import t from "prop-types"
import ReactMarkdown from "react-markdown/with-html"
import { Button } from "theme-ui"

const Question = styled("li")`
  margin-top: 16px;
  margin-bottom: 8px;
`

const Audio = styled("audio")`
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
`

const NewWord = styled("span")`
  margin: 0;
  font-style: italic;
  display: block;
`

const Transcript = styled("article")`
  margin: 0;
  .answer {
    background-color: rgba(71, 193, 191, 0.3);
    padding: 0.1rem 0.6rem 0.15rem 0.6rem;
    font-weight: 700;
    font-style: italic;
  }
`

const LFillInBlanks = ({
  transcript,
  audio,
  answers,
  times,
  level,
  newwords,
  id,
}) => {
  // const [showAnswers, toggleShowHide] = useState(false);
  let showAnswers = false
  let i = 0
  const NewWords = newwords.map(w => {
    i++
    return <NewWord key={i}>{w}</NewWord>
  })

  const TranscriptBlock = () => (
    <Transcript>
      <ReactMarkdown source={transcript} escapeHtml={false} />
    </Transcript>
  )

  return (
    <Question key={id} value={id} id={`fill-in-blank-${id}`}>
      <TranscriptBlock />
      <Audio controls preload="none">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Audio>
      {NewWords}
      <Button
        className="show-answers"
        mt={3}
        ml={0}
        mb={3}
        mr={2}
        pt={2}
        pb={2}
        pl={3}
        pr={3}
        sx={{
          color: "text",
          bg: "highlight",
          fontSize: 2,
          border: 1,
          borderColor: "highlight",
          borderStyle: "solid",
          borderRadius: 4,
          fontWeight: "bold",
        }}
        onClick={() => {
          // toggleShowHide(!showAnswers);
          showAnswers = !showAnswers
          const showBtn = document.querySelector(
            `#fill-in-blank-${id} .show-answers`
          )
          const answersDom = document.querySelectorAll(
            `#fill-in-blank-${id} .answer`
          )
          if (showAnswers) {
            for (let a of answersDom) {
              a.classList.remove("hidden")
            }
            showBtn.innerText = "Hide Answers"
          } else {
            for (let a of answersDom) {
              a.classList.add("hidden")
            }
            showBtn.innerText = "Show Answers"
          }
        }}
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </Button>
    </Question>
  )
}

LFillInBlanks.propTypes = {
  transcript: t.string,
  answers: t.arrayOf(t.string),
  audio: t.string,
  times: t.number,
  level: t.string,
  newwords: t.array,
  id: t.number,
}

LFillInBlanks.defaultProps = { newwords: [] }

export default LFillInBlanks
