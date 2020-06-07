import React, { useState } from "react"
import styled from "styled-components"
import t from "prop-types"
import ReactMarkdown from "react-markdown/with-html"
import { Button, Link, Textarea } from "theme-ui"

const Question = styled("article")`
  margin-top: 32px;
  margin-bottom: 8px;
`

const Transcript = styled("div")`
  margin: 0;
`

const Solution = styled("div")`
  margin: 0;
`

const Keywords = styled("ul")`
  margin-block-start: 1rem;
`

const MainIdeas = styled("ol")`
  margin: 0;
`

const MoreInformation = styled("p")`
  margin: 1rem 0 1rem;
`

const Topic = styled("h2")`
  margin: 0;
  font-size: 24px;
`

const H3 = styled("h3")`
  margin: 0.35rem 0 0;
  font-size: 22px;
`

const H4 = styled("h4")`
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

const SummarizeSpokenText = ({
  topic,
  transcript,
  audio,
  audio2,
  solution,
  keywords,
  mainideas,
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

  const TranscriptBlock = () => (
    <>
      <H3>Transcript</H3>
      <Transcript>
        <ReactMarkdown source={transcript} escapeHtml={false} />
      </Transcript>
    </>
  )

  const SolutionBlock = () => (
    <>
      <H3>Solution</H3>
      <Solution>
        <ReactMarkdown source={solution} />
      </Solution>
    </>
  )

  const KeywordsBlock = () => {
    if (keywords.length === 0) {
      return null
    }
    let i = 0
    const keywordlist = keywords.map(k => {
      i++
      return <li key={i}>{k}</li>
    })
    return (
      <>
        <H3>Keywords</H3>
        <Keywords>{keywordlist}</Keywords>
      </>
    )
  }

  const AudioBlock = ({ audio, audio2 }) => {
    if (audio2 === "") {
      return (
        <Audio controls preload="none">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </Audio>
      )
    } else {
      return (
        <>
          <H4>PTE Helper Audio</H4>
          <Audio controls preload="none">
            <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </Audio>
          <H4>Pearson Audio</H4>
          <Audio controls preload="none">
            <source src={audio2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </Audio>
        </>
      )
    }
  }

  const MainIdeasBlock = () => {
    if (mainideas.length === 0) {
      return null
    }
    let i = 0
    const ideaList = mainideas.map(k => {
      i++
      return (
        <li key={i}>
          <ReactMarkdown source={k} escapeHtml={false} rawSourcePos />
        </li>
      )
    })
    return (
      <>
        <H3>Main Idea</H3>
        <MainIdeas>{ideaList}</MainIdeas>
      </>
    )
  }

  return (
    <Question key={id}>
      <Topic id={`${id}.${topic}`}>
        <Link
          href={`#${id}.${topic}`}
          sx={{
            color: "text",
          }}
        >
          {`${id}. ${topic}`}
        </Link>
      </Topic>
      <MoreInformation>
        <em>({times} times)</em>&nbsp;-&nbsp;
        {level && <strong>{level}</strong>}
      </MoreInformation>
      <AudioBlock audio={audio} audio2={audio2} />
      <Textarea
        placeholder="Quick note here"
        rows={8}
        sx={{
          fontSize: 3,
          mb: 2,
          mt: 3,
        }}
      />
      <Button
        mt={2}
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
        {showTranscript
          ? "Hide Transcript & Solution"
          : "Show Transcript & Solution"}
      </Button>
      {showTranscript && (
        <>
          {NewWords}
          <TranscriptBlock />
          <MainIdeasBlock />
          <SolutionBlock />
          <KeywordsBlock />
        </>
      )}
    </Question>
  )
}

SummarizeSpokenText.propTypes = {
  topic: t.string,
  transcript: t.string,
  solution: t.string,
  keywords: t.arrayOf(t.string),
  mainideas: t.arrayOf(t.string),
  audio: t.string,
  audio2: t.string,
  times: t.number,
  level: t.string,
  newwords: t.array,
  id: t.number,
}

SummarizeSpokenText.defaultProps = { newwords: [], audio2: "" }

export default SummarizeSpokenText
