import React from 'react';
import './App.css';

function App() {
  const data = [
    {
             url: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
            author : "Arman Ahmed",
              date: "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
          url: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
          author : "Arman Ahmed",
          date : "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
          url : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
          title : "Fresh Graduate or IT Professional Looking for a...",
          author : "Arman Ahmed",
          date : "05 Jul 2019",
          description : "If you are a fresh Graduate Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
          url : "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
          title : "",
          author : "",
          date : "",
          description : ""
    },
    {
      url : "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
      title : "",
      author : "",
      date : "",
      description : ""
      },
      {
        url : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
        title : "",
        author : "",
        date : "",
        description : ""
      },
      {
        url : "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
        title : "",
        author : "",
        date : "",
        description : ""
      },
      {
        url : "https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg",
        title : "",
        author : "",
        date : "",
        description : ""
      },
      {
        url : "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
        title : "",
        author : "",
        date : "",
        description : ""
      }
  ]





  return (
    <div className="App">
      <header>
        <div className="left">
          <div className='logo-div'>
            <img className="logo" src="https://s3-ap-southeast-1.amazonaws.com/internshala-uploads/google_logo/5f195133ee39e1595494707.png"/>
            <p className="stories">Stories</p>
          </div>
          <div className="explore">
            <p>Explore Categories</p>
            <i class="fas fa-angle-down"></i>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <p>EdYoda is free learning and knowledge
                sharing platform for techies</p>
          </div>
          <div class="main-button">
            <a href="https://www.edyoda.com"><button className="goto-btn">Go To Main Website</button></a>
          </div>
        </div>
      </header>

        <div className="container">
        <div className="stories">

          { data.map((item) => Card(item))}
          
        </div>
      </div>

      


      
    </div>
  );
}

export default App;


    // data : [
    //   
    // ]


 
