import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sentenceActions, getText } from '../store/store';

import PageContent from '../components/Layout/Page';

export default function Sentence() {
  const dispatch = useDispatch();
  const sentence = useSelector(state => state.sentence);

  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);
  

  return (
    <>
      <PageContent text={sentence.generatedText} />
    </>
  )
}