import WriteFromDictationDataFrom0To100 from "./WriteFromDictationDataFrom0To100"
import WriteFromDictationDataFrom101To200 from "./WriteFromDictationDataFrom101To200"
import WriteFromDictationDataFrom201To300 from "./WriteFromDictationDataFrom201To300"
import WriteFromDictationDataFrom301To400 from "./WriteFromDictationDataFrom301To400"
import WriteFromDictationDataFrom401To500 from "./WriteFromDictationDataFrom401To500"

const WriteFromDictationData = [
  ...WriteFromDictationDataFrom0To100,
  ...WriteFromDictationDataFrom101To200,
  ...WriteFromDictationDataFrom201To300,
  ...WriteFromDictationDataFrom301To400,
  ...WriteFromDictationDataFrom401To500,
]

WriteFromDictationData.sort(function (a, b) {
  if (a.order === undefined) {
    a.order = 1000
  }
  if (b.order === undefined) {
    b.order = 1000
  }
  return a.order - b.order
})

export default WriteFromDictationData
