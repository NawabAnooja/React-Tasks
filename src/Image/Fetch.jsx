import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Fetch = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/photos")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []); 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr >
                            <td>{item.albumId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                            <td>{item.thumbnailUrl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Fetch;
