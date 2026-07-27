import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const postInstances = data.map(
          (item) => new Post(item.id, item.title, item.body)
        );
        this.setState({ posts: postInstances });
      })
      .catch((error) => {
        alert(`Error fetching posts: ${error.message}`);
        this.setState({ error: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`An error occurred: ${error.toString()}`);
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Posts List</h1>
        {this.state.posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;