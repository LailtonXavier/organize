import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle } from 'react-icons/fa';

export default function Text({ texts, handleEdit, handleDel, handleEraseAll }) {
  return (
    <>
      {texts.map((items, ind) => (
        <div className="items" key={String(items)}>
          <div>
            <FaRegCircle className="icons-Items" size={24} />
            <span>{items}</span>
          </div>

          <span className="btns">
            <button type="button" onClick={() => handleDel(ind)}>
              delete
            </button>
            <button type="button" onClick={() => handleEdit(ind)}>
              edit
            </button>
          </span>
        </div>
      ))}
      <button className="erase-all" onClick={handleEraseAll} type="button">
        erase all
      </button>
    </>
  );
}

Text.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
  handleEraseAll: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  texts: PropTypes.array.isRequired,
};
