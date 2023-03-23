import Mode from '../components/Mode/Mode';
import { wordsSentenceActions } from '../store/wordsSentenceSlice';

import icons from '../assets/icons.svg'

export default function Dashboard() {
  
  return (
      <article className='dashboard'>
        <div className='intro'>
          <p>Welcome.! Type as fast as you can and Measure your typing speed.</p>
        </div>
      
          <Mode name="Word" icon={`${icons}#icon-word`} />
          <Mode name="Sentence" icon={`${icons}#icon-sentence`} />
        
        <p className='start'>Click on icons to get start.</p>
      </article>
  )
}