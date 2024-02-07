import '../sample.css'
import Left from './myLeftBar'
import Right from './myRightBar'

function myContent(){
  return(
    <div className="container">
      <Left/>
      <p>This is the main content</p>
      <Right/>
    </div>
  )
}

export default myContent