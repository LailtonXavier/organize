import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

export default function List({ inptText, setInptText, handleAdd, inptRef }) {
  return (
    <>
      <div className="list">
        <FaCheckCircle className="iconCheck" size={24} onClick={handleAdd} />
        <input
          type="text"
          ref={inptRef}
          placeholder="Add new Here..."
          name="add"
          value={inptText}
          onChange={(e) => setInptText(e.target.value)}
        />
      </div>
    </>
  );
}

List.defaultProps = {
  inptRef: false,
};

List.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  inptRef: PropTypes.shape(),
  inptText: PropTypes.string.isRequired,
  setInptText: PropTypes.func.isRequired,
};
