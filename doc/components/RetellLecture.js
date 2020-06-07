import React, { useState } from "react"
import styled from "styled-components"
import t from "prop-types"
import { Textarea } from "theme-ui"
import { Button } from "theme-ui"

const Question = styled("li")`
  margin-top: 16px;
  margin-bottom: 8px;
`

const Transcript = styled("p")`
  margin: 1rem 0;
`

const MoreInformation = styled("p")`
  margin: 0;
`

const Topic = styled("h4")`
  margin: 0;
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

const RetellLecture = ({
  topic,
  transcript,
  audio,
  times,
  level,
  newwords,
  id,
}) => {
  const [showTranscript, toggleShowHide] = useState(false)
  let i = 0
  const NewWords = newwords.map(w => {
    i++
    return <NewWord key={i}>{w}</NewWord>
  })
  i = 0
  const transcriptItem = transcript.map(t => {
    i++
    return <Transcript key={i}>{t}</Transcript>
  })

  return (
    <Question key={id} value={id}>
      <Topic>{topic}</Topic>
      <MoreInformation>
        <em>({times} times)</em>&nbsp;-&nbsp;
        {level && <strong>{level}</strong>}
        {NewWords}
      </MoreInformation>
      <Audio controls preload="none">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </Audio>
      <Textarea
        placeholder="Quick note here"
        rows={5}
        sx={{
          fontSize: 3,
          mb: 2,
          mt: 3,
        }}
      />
      <Button
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
        onClick={() => toggleShowHide(!showTranscript)}
      >
        {showTranscript ? "Hide transcript" : "Show transcript"}
      </Button>

      {showTranscript && transcriptItem}
    </Question>
  )
}

RetellLecture.propTypes = {
  topic: t.string,
  transcript: t.array,
  audio: t.string,
  times: t.number,
  level: t.string,
  newwords: t.array,
  id: t.number,
}

RetellLecture.defaultProps = { newwords: [] }

export default RetellLecture
