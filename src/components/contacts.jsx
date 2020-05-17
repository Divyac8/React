import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
class Contacts extends Component {
    state = { 
        posts: [
            // Initial Data
    
        ]
     };
    async componentDidMount() {
        const {data:posts} = await axios.get(apiEndPoint);
        this.setState({ posts })
     }
     
     handelAdd = async () => {
        
        const obj = {title :"a", body: "b"};
        const {data : post} = await axios.post(apiEndPoint, obj)
        const posts = [post, ...this.state.posts]
        this.setState({posts})
        console.log(posts);

    }

    handleUpdate = async post =>{
        post.title ="Updated";
        const {data} = await axios.put(apiEndPoint + '/' + post.id, post);
        // axios.patch(apiEndPoint + '/' + post.id, {title: post.title})
        console.log(data);
        const posts = {...this.state.props}
        // const index = posts.indexOf(post);
        // posts[index] = {...post};
        this.setState({posts})


    };

    handleDelet = post =>{

    }

    render() { 
        return ( 
            
            
            <div class="container">
                <div>
                    <button className="btn btn-primary"onClick={this.handelAdd}>Add</button>
                </div><br></br>
            
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post =>(
                        <tr key={post.id}>
                        <td>{post.title}</td>
                        <td><button className="btn btn-primary" onClick={() => this.handleUpdate(post)}>Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>                        
                        
                        </tr>
                    ))
                }
                        
                    
                    
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Contacts;