import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../store/modalSlice';

import Mode from '../components/UI/Mode/Mode';
import PopUpModal from '../components/UI/Modal/PopUpModal';

import icons from '../assets/icons.svg';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { title, message, isOpen } = useSelector(state => state.modal);

  useEffect(() => {

    window.addEventListener('offline', e => {

      dispatch(modalActions.setMessage({ title: 'Device is offline', message: "App won't work as expected, it is recommanded to use app with internet on.", isOpen: true }));
    });

    return () => {
      window.removeEventListener('offline', e => {});
    }
  }, [dispatch])


  return (
    <>
      {isOpen && <PopUpModal title={title} message={message}  />}
      
      <main className='dashboard'>
          <div className='intro'>
            <p>Welcome.! Type as fast as you can and Measure your typing speed.</p>
          </div>
        
            <Mode name="Word" icon={`${icons}#icon-word`} />
            <Mode name="Sentence" icon={`${icons}#icon-sentence`} />
          
          <p className='start'>Click on icons to get start.</p>
        </main>
    </>
  )
}