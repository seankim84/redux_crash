import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                title: '',
                body: ''
            };
        this.setChange = this.onChange.bind(this);
        this.setSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
            e.preventDefault();
            const post = {
                title: this.state.title,
                body: this.state.body   
            }

            fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                headers: {
                   'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }

  render() {
    return (
      <div>
        <h1>Add the Post</h1>
        <form onSubmit={this.setSubmit}>
            <div>
                <label>Title:{this.state.title}</label>
                <br />
                <input type="text" name="title" onChange={this.setChange} value={this.state.title} />
            </div>
            <br />
            <div>
                <label>Body:{this.state.body}</label>
                <br />
                <input type="text" name="body" onChange={this.setChange} value={this.state.body} />
            </div>
                <br />
                <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
