import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import '../style/main.css';
import RequestsActions from '../redux/redux';
import Content from './content';
import Pagination from './pagination';
import NavBar from './navBar';
import Footer from './footer';
import Header from './header';

const App = styled.div`
  @media (min-width: 1920px) {
    .header-container {
      min-height: 768px;
    }
    .nav-bar-container {
      height: 40px;
      padding: 0 499px;
    }
    .content-container {
      min-height: 725px;
      padding: 0 499px;
    }
    .pagination-container {
      padding: 0 499px;
    }
    .footer-container {
      padding-left: 499px;
      padding-right: 499px;
    }
  }
  @media (min-width: 1600px) and (max-width: 1920px) {
    .header-container {
      min-height: 700px;
    }
    .nav-bar-container {
      height: 40px;
      padding: 0 400px;
    }
    .content-container {
      min-height: 625px;
      padding: 0 400px;
    }
    .pagination-container {
      padding: 0 400px;
    }
    .footer-container {
      padding-left: 400px;
      padding-right: 400px;
    }
  }
  @media (min-width: 1360px) and (max-width: 1600px) {
    .header-container {
      min-height: 600px;
    }
    .nav-bar-container {
      height: 40px;
      padding: 0 300px;
    }
    .content-container {
      min-height: 625px;
      padding: 0 300px;
    }
    .pagination-container {
      padding: 0 300px;
    }
    .footer-container {
      padding-left: 300px;
      padding-right: 300px;
    }
  }
  @media (max-width: 900px) {
    .header-container {
      height: 768px;
    }
    .nav-bar-container {
      height: 40px;
      padding: 0 200px;
    }
    .content-container {
      height: 725px;
      padding: 0 200px;
    }
    .pagination-container {
      padding: 0 200px;
    }
    .footer-container {
      padding-left: 200px;
      padding-right: 200px;
    }
  }
  @media (max-height: 1850px) {
    .modal-container {
      width: 25%;
      padding: 60px 30px 30px 30px;
      img {
        height: 15px;
      }
      h2 {
        font-size: 30px;
        margin: 10px 0 30px;
      }
      button {
        margin: 10px 0;
      }
    }
  }
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };
  }

  componentDidMount() {
    const target = document.getElementById('overlay');
    target.addEventListener('click', () => this.toggleModal(), false)
  }

  toggleModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  changeNews = (data) => {
    const { news } = this.props;
    news.push(data);
    this.props.addNews(news);
  }

  render () {
    const { isModalOpen } = this.state;
    const { location: { search }, news, addNews, toggleCategory, selectedCategory, globalNews } = this.props;
    return (
      <App className='app' style={{ height: '100vh' }} isModalOpen={isModalOpen}>
        <Header toggleModal={this.toggleModal} isModalOpen={isModalOpen} addNews={addNews} />
        <NavBar className='nav-bar-container' toggleCategory={toggleCategory} selectedCategory={selectedCategory} />
        <Content className='content-container' page={+search[search.length - 1]} news={news} globalNews={globalNews} />
        <Pagination className='pagination-container' news={news} toggle={this.props.toggle} />
        <Footer className='footer-container' />
      </App>
    )
  }
}

function mapStateToProps (state) {
  const { selectedCategory, news } = state.req
  const filteredNews = selectedCategory !== 'Все' ? news.filter(n => n.category === selectedCategory) : news;
  return {
    selectedCategory,
    news: filteredNews,
    globalNews: state.req.globalNews,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNews: (payload) => dispatch(RequestsActions.addNews(payload)),
  toggleCategory: (category) => dispatch(RequestsActions.toggleCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
