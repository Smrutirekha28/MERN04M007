
import { useEffect, useState } from 'react';
import './App.css'
import axios  from 'axios';


function App() {

const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {data.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.userId}</td>
              <td>{obj.title}</td>
              <td>{obj.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
