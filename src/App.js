import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"



function handleClick() {
 console.log("clicked")
 }
function  App(){
  return (
    <div className='col-md-12'>
      <div className='weatherBg'>
        <h1 className='heading'>Weather App</h1>
        <div className='d-grid gap-3 col-4 mt-4'>
          <input type="text" className='from-control'/>
          <button className='btn btn-primary' type='button' onClick={handleClick}>Search</button>
        </div>

      </div>

    </div>
    
  );
}

export default App;
