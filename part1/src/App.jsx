const Content=(part,excercise)=>{
  console.log(part+excercise);
  return(
   
      <p>{part}={excercise}</p>
    
  );

}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {Content(part1,exercises1)}
      </p>
      <p>
        {Content(part2,exercises2)}
      </p>
      <p>
        {Content(part3,exercises3)}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App