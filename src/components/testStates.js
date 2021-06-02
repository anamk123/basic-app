import React from "react";
import '../css/test.css';
import {stockData} from '../data';



function TestingStates(props) {

const [count, setCount] = React.useState(0);
    const [text,  setText] = React.useState("");

      
    return(

<div>

    <p>Tracking the text: {text} <br/> Tracking the clicks {count}</p>
     <input type="text" onChange={e => setText(e.target.value)}></input>


     

     <button onClick={() => setCount(count + 1)}>Click + </button>
     <button onClick={() => setCount(count - 1)}>Click + </button>
     {console.log(text)}


     
     <div className="stock-container">
        {stockData.map((stock, key) => {
          return (
            <div key={key}>
              {stock.company +
                " , " +
                stock.ticker +
                " ," +
                stock.stockPrice +
                ", " +
                stock.timeElapsed}
            </div>
          );
        })}
      </div>
    

      </div>

  


    
    );
}
export default TestingStates;