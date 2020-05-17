import { FaQuestionCircle } from "react-icons/fa";


export default {
  name: 'frequentlyAskedQuestion',
  title: 'Frequently Asked Question',
  type: 'object',
  icon: FaQuestionCircle,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockText',
    }
  ]
}