import React from 'react'
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ value, color }) => {
  return (
    <div className='rating'>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 2
              ? faStar
              : value >= 1
              ? faStarHalfAlt
              : faStarReg
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 4
              ? faStar
              : value >= 3
              ? faStarHalfAlt
              : faStarReg
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 6
              ? faStar
              : value >= 5
              ? faStarHalfAlt
              : faStarReg
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 8
              ? faStar
              : value >= 7
              ? faStarHalfAlt
              : faStarReg
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 10
              ? faStar
              : value >= 9
              ? faStarHalfAlt
              : faStarReg
          }
        ></FontAwesomeIcon>
      </span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

export default Rating