import Mode from '../components/Mode/Mode';
import icons from '../assets/icons.svg'

export default function() {
  return (
    <article className='dashboard'>
        <Mode name="Word" icon={`${icons}#icon-word`} />
        <Mode name="Sentence" icon={`${icons}#icon-sentence`} />
      
      <p>Click on icons to get start.</p>
    </article>
  )
}