import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps={
    country:'us',
    pageSize:5,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }

  }
  async updatePage(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parseData=await data.json();
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parseData=await data.json();
    // this.setState({
    //   articles:parseData.articles,
    //   totalResults:parseData.totalResults,
    //   loading:false
    // })
    this.updatePage()
  }
  handlePrevButton=async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parseData=await data.json();
    // this.setState({
    //   articles:parseData.articles,
    //   page:this.state.page-1,
    //   loading:false
    // })
    this.setState({page:this.state.page-1});
    this.updatePage()
  }

  handleNextButton = async()=>{
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/20))){
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0cc8d57ab9e43828ae4fe3531fdaf5f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    //   let data= await fetch(url);
    //   let parseData=await data.json();
    //   this.setState({
    //     articles:parseData.articles,
    //     page:this.state.page+1,
    //     loading:false
    //   });
    this.setState({page:this.state.page+1});
    this.updatePage()
    }
  
  render() {
    return (
      <div className="container">
        <h1 className="my-3 text-center">This are the top headlines of todays NewsMonkey</h1>
        {this.state.loading &&<Spinner />}
        <div className="row my-5">
          {!this.state.loading && this.state.articles.map((element)=>{
                return    <div className=" col-md-4 my-2" key={element.url}>
                    <NewsItem title={element.title} author={element.author} description={element.description} imageUrl={!element.urlToImage?"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a51f52cfe2f928955dd8893a8efe3bbb.jpg":element.urlToImage} newsUrl={element.url} publisher={element.source.name} />
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
