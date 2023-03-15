import Mode from '../components/Mode/Mode';

export default function() {
  return (
    <article className='dashboard'>
      <Mode name="Word"/>
      <Mode name="Sentence"/>
    </article>
  )
}