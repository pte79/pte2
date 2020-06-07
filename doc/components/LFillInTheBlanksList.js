import React from "react"
import t from "prop-types"
import styled from "styled-components"
import LFilInTheBlanks from "./LFilInTheBlanks"

const Ol = styled("ol")`
  padding: 0;
  margin: 50px 0 0 16px;
`

const LFillInTheBlanksList = ({ start, total, data }) => {
  const listSentences = data.map(s => {
    if (s.id >= start && s.id < start + total) {
      return (
        <LFilInTheBlanks
          transcript={s.transcript}
          answers={s.answers}
          audio={s.audio}
          times={s.times}
          level={s.level}
          newwords={s.newwords}
          id={s.id}
          key={"l-fill-in-the-blanks-" + s.id}
        />
      )
    }
    return null
  })

  return (
    <Ol start={start} key={start}>
      {listSentences}
    </Ol>
  )
}

LFillInTheBlanksList.propTypes = {
  start: t.number,
  total: t.number,
  data: t.array,
}
export default LFillInTheBlanksList
