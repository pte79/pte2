import React from "react"
import t from "prop-types"
import styled from "styled-components"
import RetellLecture from "./RetellLecture"

const Ol = styled("ol")`
  padding: 0;
  margin: 0 0 0 16px;
`

const RetellLectureList = ({ start, total, data }) => {
  const listSentences = data.map(s => {
    if (s.id >= start && s.id < start + total) {
      return (
        <RetellLecture
          topic={s.topic}
          transcript={s.transcript}
          audio={s.audio}
          times={s.times}
          level={s.level}
          newwords={s.newwords}
          id={s.id}
          key={"write-from-dictation-" + s.id}
        ></RetellLecture>
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

RetellLectureList.propTypes = {
  start: t.number,
  total: t.number,
  data: t.array,
}
export default RetellLectureList
