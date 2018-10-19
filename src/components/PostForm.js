import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                title: '',
                body: ''
            };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

  render() {
    return (
      <div>
        <h1>Add the Post</h1>
        <form>
            <div>
                <label>Title:{this.state.title}</label>
                <br />
                <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
            </div>
            <br />
            <div>
                <label>Body:{this.state.body}</label>
                <br />
                <input type="text" name="body" onChange={this.onChange} value={this.state.body} />
            </div>
                <br />
                <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
