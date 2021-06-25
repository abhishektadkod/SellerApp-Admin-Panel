import { useEffect, useRef, useState } from 'react';
import SockJsClient from 'react-stomp';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import axios from 'axios';

function App() {
  const client = useRef(null);

  const [s, ss] = useState(true);

  const [msg,setMsg] = useState('');



  var seller = {
  };
  const [sellersList, updateSellersList] = useState(seller);

  const AddSellers = () => {
    axios.get('http://localhost:8080/sellers')
      .then(function (response) {
        // handle success
        console.log(response.data)
        response.data.map((val) => {
          seller[val.id] = { "available": val.available, "name": val.displayName }
        });
        updateSellersList(seller);
        ss(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const UpdateSeller = (msg) => {
    seller = sellersList;
    console.log(seller);
    seller[msg.id]["available"] = msg.available;
    updateSellersList(seller);
    console.log(msg, sellersList);
    ss(false);
  }


  const off = <label class="switch">
    <input type="checkbox" />
    <span class="slider round"></span>
  </label>;
  const on = <label class="switch">
    <input type="checkbox" checked />
    <span class="slider round"></span>
  </label>;

  return (
    <div className="App">

      <SockJsClient url='http://localhost:8080/sellerApp' topics={['/topic/available']}
        onConnect={(msg) => { console.log(msg) }}
        onMessage={(msg) => { setMsg(msg);seller = sellersList; seller[msg.id]["available"] = msg.available; updateSellersList(seller); console.log(msg, sellersList); s ? ss(false) : ss(true); }}
        ref={client} />

      <br /><br /><div className="btn btn-outline-primary" onClick={() => { console.log(client); AddSellers() }}>Get Sellers</div>

      {/* <div onClick={() => client.current.sendMessage("/app/sellers", "hi")}>Connect2</div> */}

      <div className="display-4">Seller List</div><br /><br />

      <div className="row">
        <div className="col-md-8">

      <table className="table container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(sellersList).map((key, index) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{sellersList[key]['name']}</td>
              <td>{sellersList[key]["available"] ? on : off}</td>
            </tr>
          ))}


          {/* {Object.keys(sellersList).length==0?"a":String(sellersList[1].available)}
          {String(s)} */}





        </tbody>
      </table>
      </div>
      <div className="col-md-4">
      <div className="" style={{height:"40vh"}}>
        <div className="display-4">Websocket Message:</div>
        <code>
          <pre>{JSON.stringify(msg, null, 2) }</pre>
        </code>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
