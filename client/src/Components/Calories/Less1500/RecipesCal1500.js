import React, { Component } from "react";
import axios from "axios";
import DataTableCal1500 from './DataTableCal1500';


export default class RecipesVeg extends Component{
    constructor(props){
        super(props);
        this.state = { foodList: [] };
    }

    componentDidMount(){
        axios.get('http://localhost:3001/read')
            .then(res => {
                this.setState({ foodList: res.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

     recipe(){
        return this.state.foodList.map((val, i) =>{
            return <DataTableCal1500 obj={val} key={i} />;
        })
    }

    render(){
        return (
            <div className = "recipes">
                {this.recipe()}
            </div>
            )
    }
}

