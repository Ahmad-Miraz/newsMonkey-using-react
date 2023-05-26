import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }

  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f";
    let data= await fetch(url);
    let parseData=await data.json();
    this.setState({articles:parseData.articles})
  }
  render() {
    return (
      <div className="container my=3">
        <h1 className="my-3 text-center">This are the top headlines of todays NewsMonkey</h1>
        <div className="row my-5">
          {this.state.articles.map((element)=>{
                return    <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={!element.urlToImage?"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a51f52cfe2f928955dd8893a8efe3bbb.jpg":element.urlToImage} newsUrl={element.url} />
                  </div>
          })}
          
        </div>
      </div>
    );
  }
}

export default News;
