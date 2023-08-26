import { useState , useEffect} from 'react';

import './App.css';
import axios from 'axios';

function App() {

  const [list, setList] = useState([])

  useEffect(()=>{
    axios.get("https://charming-cod-gaiters.cyclic.app/Plantoon")
    .then((res)=>{
      // console.log(res.data)
      setList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })



  return (




    <div className="container-fluid"> {/* Use container-fluid className for full width */}
    
      <h1>Platoon One Payment List</h1>



      <table className="table table-striped table-dark table-responsive">
      <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FullName</th>
            <th scope="col">StateCode</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        {list.map((items, index)=>{
          const inputDate = new Date(items?.createdAt);
     const formattedDate = `${("0" + (inputDate.getMonth() + 1)).slice(-2)}-${( "0" + inputDate.getDate()  ).slice(-2)}-${inputDate.getFullYear()}`;
    

          return(
            <tr key={index}>
            <td scope="row">{index+1}</td>
            <td>{items?.fullName}</td>
            <td>{items?.stateCode}</td>
            <td>{items?.AmountPay}</td>
            <td>{formattedDate}</td>
           
          </tr>
          )
        
        })}
        
     
     
        </tbody>
      </table>
    </div>
  );
}

export default App;
