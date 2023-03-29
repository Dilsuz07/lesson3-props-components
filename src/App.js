import { Component } from "react";
import Post from "./Components/Post";

export default class App extends Component {
  state = {
    posts : [
      {
        id: 1,
        name : "JavaScript",
      },
      {
        id: 2,
        name : "ReactJS",
      },
      {
        id: 3,
        name : "Python",
      }
    ]
  }

  handleSomething = () => {
    console.log('App.js dan chaqirilgan funksiya');
  }

  render() {
    // const {posts} = this.state
    return (
      <div>

      <Post posts={this.state.posts} callback={this.handleSomething} />

        {/* {this.state.posts.map((post) => {
          return <p key={post.id}>{post.name}</p>
        })} */}
      </div>
    )
  }


}