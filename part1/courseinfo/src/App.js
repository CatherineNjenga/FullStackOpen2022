const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part name ={props.name[0].name} exercise ={props.exercises[0].exercises}  />
      <Part name ={props.name[1].name} exercises ={props.exercises[1].exercises} />
      <Part name ={props.name[2].name} exercises ={props.exercises[2].exercises} />
    </div>
  )
}



const Total = (props) => {

  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      }, 
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course ={course.name} />
      <Content name ={course.parts} exercises ={course.parts} />
      <Total parts ={course.parts} />
    </div>
  )
}

export default App;
