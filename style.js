import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
        <h1>Welcome to My Social Network</h1>
      </header>

      <main>
        <section>
          <h2>Latest Posts</h2>
          <ul>
            <li>
              <div className="post">
                <h3>My trip to the beach</h3>
                <p>Just got back from an amazing weekend at the beach with friends. Here are some pictures!</p>
                <img src="beach.jpg" alt="beach" />
                <div className="post-actions">
                  <button>Like</button>
                  <button>Comment</button>
                </div>
              </div>
            </li>
            <li>
              <div className="post">
                <h3>My new puppy</h3>
                <p>Meet my new furry friend! Her name is Luna and she's the cutest thing ever.</p>
                <img src="puppy.jpg" alt="puppy" />
                <div className="post-actions">
                  <button>Like</button>
                  <button>Comment</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 My Social Network</p>
      </footer>
    </div>
  );
}

export default App;
