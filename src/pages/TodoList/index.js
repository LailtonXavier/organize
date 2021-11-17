import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import List from './List';
import { Center } from './styled';

import Text from './Text';

export default function TodoList() {
  const [inptText, setInptText] = useState('');
  const [texts, setTexts] = useState([]);
  const [index, setIndex] = useState(-1);
  const inptRef = useRef(null);

  const handleAdd = () => {
    const newTexts = texts;
    const newIndex = index;

    let newInptText = inptText;
    newInptText = newInptText.trim();

    let errors = false;

    if (newTexts.indexOf(newInptText) !== -1 || newInptText.length === 0) {
      toast.error('Empty field is not allowed');
      errors = true;
      return;
    }

    if (errors) return;

    const newsTexts = [...texts];

    if (newIndex === -1) {
      setTexts([...newsTexts, newInptText]);

      setInptText('');
    } else {
      newsTexts[newIndex] = newInptText;
      setTexts([...newsTexts]);
      setIndex(-1);
      setInptText('');
    }
  };

  const handleDel = (ind) => {
    const newTexts = texts;
    const newInpts = [...newTexts];

    newInpts.splice(ind, 1);

    setTexts([...newInpts]);
    setInptText('');
  };

  const handleEdit = (ind) => {
    const newText = texts;
    setInptText(newText[ind]);
    setIndex(ind);
    inptRef.current.focus();
  };

  const handleEraseAll = () => {
    const newTexts = texts;
    const newInpts = [...newTexts];

    newInpts.splice(0, newInpts.length);

    setTexts([...newInpts]);
    setInptText('');
  };

  return (
    <Container>
      <Center>
        <div className="middle">
          <div className="texts">
            <h3>To-do List</h3>
            <p>
              Drag and Drag and drop to set your main priorities, check when{' '}
            </p>
            <p>done and create what´s new.</p>
          </div>
        </div>
        <div className="todo" id="secList">
          <h4>To-do</h4>
          <p>Take a breach</p>
          <p>Start doing</p>

          <List
            inptRef={inptRef}
            inptText={inptText}
            setInptText={setInptText}
            handleAdd={handleAdd}
          />

          <Text
            handleDel={handleDel}
            handleEdit={handleEdit}
            handleEraseAll={handleEraseAll}
            texts={texts}
          />
        </div>

        <div className="done">
          <h4>Done</h4>
          <p>Congratulions!</p>
          <strong>Start doing</strong>

          <button className="erase-all" onClick={handleEraseAll} type="button">
            erase all
          </button>
        </div>
      </Center>
    </Container>
  );
}
