import React from "react"
import t from "prop-types"
import styled from "styled-components"
import SummarizeSpokenText from "./SummarizeSpokenText"

const Section = styled("section")`
  padding: 0;
  margin: 10px 0 0;
`

const SummarizeSpokenTextList = ({ start, total, data }) => {
  const listSentences = data.map(s => {
    if (s.id >= start && s.id < start + total) {
      return (
        <SummarizeSpokenText
          topic={s.topic}
          transcript={s.transcript}
          solution={s.solution}
          keywords={s.keywords}
          mainideas={s.mainIdeas}
          audio={s.audio}
          audio2={s.audio2}
          times={s.times}
          level={s.level}
          newwords={s.newwords}
          id={s.id}
          key={"summary-spoken-text-" + s.id}
        />
      )
    }
    return ""
  })

  return (
    <Section start={start} key={start}>
      {listSentences}
    </Section>
  )
}

SummarizeSpokenTextList.propTypes = {
  start: t.number,
  total: t.number,
  data: t.array,
}
export default SummarizeSpokenTextList
