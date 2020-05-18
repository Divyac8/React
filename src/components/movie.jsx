import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Movie extends Component {
    constructor(){
    super()
    this.state = {  
        showing: true,
        id:'',
        name:'',
        director:'',
        records:[],
        editshowing: true
        



    }

    }
    handleUpdate = async record => {
        console.log("updated");
        const { editshowing } = this.state;
        const formData = new FormData();
        formData.append('record', record);
        

        const headers ={
            'X-AUTH-TOKEN':sessionStorage.getItem('token'),
            'Content-Type':'application/json'
        }
        
        await axios.patch('http://18.219.121.39:8080/movie' + "/" + record.id,record,{
            headers:headers
        });
        this.setState({ editshowing: !editshowing })
        
        
        


    };
    handleDelete =async record =>{
        console.log("deleted")
        const records = this.state.records.filter(p => p.id !== record.id)
        this.setState({records})
        const headers ={
            'X-AUTH-TOKEN':sessionStorage.getItem('token'),
            'Content-Type':'application/json'
        }
      
      await axios.delete( 'http://18.219.121.39:8080/movie'+ "/" + record.id,{
        headers:headers

      })
        
    }

    handelChange=(e)=>{
           this.setState({[e.target.name]:e.target.value})
    }

    handelSubmit=(e)=>{
        e.preventDefault()
        const movie={
            name:this.state.name,
            director:this.state.director

        }
        console.log("name:"+ this.state.name);
        console.log("director:"+ this.state.director);
        const headers ={
            'X-AUTH-TOKEN':sessionStorage.getItem('token'),
            'Content-Type':'application/json'
        }
        axios.post('http://18.219.121.39:8080/movie',movie,{
            headers:headers
            
        })
          .then(res =>{
            console.log(res);
          })

        
        
    }

    async componentDidMount(){
        const headers ={
            'X-AUTH-TOKEN':sessionStorage.getItem('token'),
            'Content-Type':'application/json'
        }

        await axios.get('http://18.219.121.39:8080/movie',{
            headers:headers
            
        }
            
        )
        
        .then(res => {
        
        this.setState({ records:res.data });
        console.log(res);
        
        
        })
      
  
    }    
    render() { 
        const { showing } = this.state;
        const {editshowing}= this.state;
        //const {movies} = this.state;
        return ( 
            <div className="container">
                <h2>Welcome to Movie Application!</h2>
                <br></br>
            <table class="table table-bordered table-sm mx-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Movie Name</th>
                        <th>Movie Director</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.records.map( record =>{

                        return <tr>
                        <td key={record.id}>{record.id}</td>    
                        <td>{record.name}</td>
                        <td>{record.director}</td>
                        <td><button className="btn btn-success" onClick={() => this.handleUpdate(record)}>Edit</button>
                        <button className="btn btn-danger" onClick ={() => this.handleDelete(record)}>Delete</button>
                        </td>                        
                        
                        </tr>


                    }
                        
                    )
                }
                        
                    
                    
                    </tbody>


            </table>
            {editshowing 
                    ? showing
    
                    : <div className="record" id="movie_record">
                
                    <form className="form-group offset-lg-4" onSubmit={this.handelSubmit}  >
                    
                    
                        {this.state.records.filter(records => records.id).map(edit => {
                          <div class="form-group col-md-6">
                            <label>Movie Name</label>
                            <input type="text" key={edit.id} className="form-control" name="name" onChange={this.handelChange} value={edit.name}/>
                        
                            <label>Director </label>
                            <input type="text" className="form-control" name="director" onChange={this.handelChange} value={edit.director} />
                        </div>

                        })}
                        
                    
                        
                        
                 
                        <button  className="btn btn-success btn-record" >Update</button>
                    </form>
             
        
                    </div>
                }
{/* 
<ul>
        {
          this.state.records.map(function(movie){
            return <li key={movie.id}>{movie.id} - {movie.name}</li>;
          })
        }
        </ul> */}

            <div>
            <button className="btn btn-link"  onClick={() => this.setState({ showing: !showing })}>
                <h4>Add a New Movie Record</h4>
                
            </button>
            {showing 
                    ? null
    
                    : <div className="record" id="movie_record">
                
                    <form className="form-group offset-lg-4" onSubmit={this.handelSubmit}  >
                        <div class="form-group col-md-6">
                            <label>Movie Name</label>
                            <input type="text" className="form-control" name="name" onChange={this.handelChange} value={this.state.names}/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Director </label>
                            <input type="text" className="form-control" name="director" onChange={this.handelChange} value={this.state.director} />
                        </div>
                        
                        
                        <button  className="btn btn-success btn-record" >submit</button>
                    </form>
        
                    </div>
                }

            </div>
        </div>    
         );
    }
}
 
export default Movie;