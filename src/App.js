import React, { Suspense } from 'react';
import './App.css';

import { fetchData } from './Api';

const resource = fetchData();

const App = () => (
    <div className="container my-5">
        <h1>Hello World</h1>
    </div>
);

const ProfileDetails = () => {
    const user = resource.user.read();
    return (
        <div className="card card-body my-3">
            <h1 className="large text-primary">{user.name}</h1>
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>City: {user.address.city}</li>
            </ul>
        </div>
    );
};

/*
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
 */

export default App;
