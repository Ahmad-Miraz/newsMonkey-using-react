import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }

  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parseData=await data.json();
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults,
      loading:false
    })
  }
  handlePrevButton=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parseData=await data.json();
    this.setState({
      articles:parseData.articles,
      page:this.state.page-1,
      loading:false
    })
  }

  handleNextButton = async()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/20))){
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data= await fetch(url);
      let parseData=await data.json();
      this.setState({
        articles:parseData.articles,
        page:this.state.page+1,
        loading:false
      });
    }
  }
  render() {
    return (
      <div className="container my=3">
        <h1 className="my-3 text-center">This are the top headlines of todays NewsMonkey</h1>
        {this.state.loading &&<Spinner />}
        <div className="row my-5">
          {!this.state.loading && this.state.articles.map((element)=>{
                return    <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={!element.urlToImage?"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a51f52cfe2f928955dd8893a8efe3bbb.jpg":element.urlToImage} newsUrl={element.url} />
                  </div>
          })}
          
        </div>
        <div className="d-flex justify-content-between mb-4">
        <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePrevButton}>&laquo; Previous</button>
        <button type="button" className="btn btn-dark" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextButton}>Next &raquo;</button>

        </div>
      </div>
    );
  }
}

export default News;
