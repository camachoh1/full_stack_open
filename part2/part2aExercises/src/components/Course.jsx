import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

function Course({courses}) {
  console.log(courses);
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Header course={course.name} key={course.id}/>
            <Content parts={course.parts} key={course.parts.id}/>
            <Total parts={course.parts} key={course.parts.id}/>
          </div>
        )
      })}
    </div>
  )
}

export default Course