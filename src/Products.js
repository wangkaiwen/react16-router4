/**
 * Created by kevin on 2017/11/20.
 */
import React from 'react';
import { Link, Route } from 'react-router-dom';
import productData from './product.json';
import Product from './Product';

class Products extends React.Component {
    state={
      data:[]
    };
    componentDidMount(){
        console.log(this);
        this.getData();
    }
    getData(){
        this.setState({data:productData})
    }
    render(){
        var linkList=this.state.data.map((item)=>{
           return(
               <li key={item.id}>
                   <Link to={`${this.props.match.url}/${item.id}`}>{item.name}</Link>
               </li>
           )
        });

        return (
            <div>
                <div>
                    <h2>产品</h2>
                    <ul>
                        {linkList}
                    </ul>
                </div>
                <Route path={`${this.props.match.url}/:productId`} render={(props)=><Product data={this.state.data} {...props}/>}/>
                <Route path={this.props.match.url} exact={true} render={()=>(<div>请选择一个产品</div>)}/>
            </div>
        );
    }
};

export default Products;