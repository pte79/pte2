import React from "react"
import t from "prop-types"
import styled from "styled-components"

const Ol = styled("ol")`
  padding: 0;
  margin: 0 0 0 16px;
`

const WriteFromDictationAll = ({ start, total, data }) => {
  const listSentences = data.map(s => {
    if (s.id >= start && s.id < start + total) {
      return (
        <li id={s.id} key={"write-from-dictation-" + s.id}>
            {s.transcript}
        </li>
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
