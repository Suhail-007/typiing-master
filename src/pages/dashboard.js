import Mode from '../components/Mode/Mode';
import { TbCircleLetterS, TbCircleLetterW } from 'react-icons/tb';

export default function() {
  return (
    <article className='dashboard'>
      <Mode name="Word" icon={<TbCircleLetterW />}/>
      <Mode name="Sentence" icon={<TbCircleLetterS />}/>
    </article>
  )
}