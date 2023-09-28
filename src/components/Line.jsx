

import {WordInput} from "./";
import PropTypes from "prop-types";

export const Line = ({ lineIndex, line, generation }) => {


  return (
    <div className="my-2">
      { line.map((item, index) => (
        item.isHidden ? (
          <WordInput key={`gen-${generation}-line-${lineIndex}-item-${index}`} item={item} />
        ) : (
          <span
            key={`item-${index}`}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-1 rounded-md mr-2"
          >
            {item.word}
          </span>
        )
      )) }
    </div>

  )
}

Line.propTypes = {
  line: PropTypes.array.isRequired,
}

