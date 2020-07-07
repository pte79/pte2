import React from "react"
import t from "prop-types"
import styled from "styled-components"
import WriteFromDictation from "./WriteFromDictation"

const Ol = styled("ol")`
  padding: 0;
  margin: 0 0 0 16px;
`

const WriteFromDictationAll = ({ start, total, data }) => {
  const listSentences = data.map(s => {
    if (s.order !== undefined && s.order >= start && s.order < start + total) {
      let audioType = s.audioType || "mpeg"
      return (
        <WriteFromDictation
          transcript={s.transcript}
          audio={s.audio}
          times={s.times}
          level={s.level}
          audioType={audioType}
          newwords={s.newwords}
          id={s.order}
          key={"write-from-dictation-" + s.order}
        />
      )
    }
    return ""
  })

  return (
    <Ol start={start} key={start}>
      {listSentences}
    </Ol>
  )
}

WriteFromDictationAll.propTypes = {
  start: t.number,
  total: t.number,
  data: t.array,
}
export default WriteFromDictationAll
