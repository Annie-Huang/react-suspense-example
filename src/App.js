import React, { Suspense } from 'react';
import './App.css';

import { fetchData } from './Api';
const resource = fetchData();

const App = () => (
    <div className="container my-5">
        <Suspense fallback={<h1>Loading User...</h1>}>
        {/*<Suspense fallback={<Spinner />}>*/}
            <ProfileDetails />
        </Suspense>
        <Suspense fallback={<h1>Loading Posts...</h1>}>
        {/*<Suspense fallback={<Spinner />}>*/}
            <ProfilePosts />
        </Suspense>
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

const ProfilePosts = () => {
    const posts = resource.posts.read();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <strong>Latest Posts</strong>
            </li>
            {posts.map(post => (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

/*
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
]
 */


const Spinner = () => (
    <img
        src='./spinner.gif'
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt="Loading..."
    />
);

export default App;
