import React, { useState } from "react";
import './App.css';
function App() {
  const [question, setQuestion] = useState(false);
  const [article, setArticle] = useState(false);

  const handleQuestionClick = () => {
    setQuestion(true);
    setArticle(false);
  };

  const handleArticleClick = () => {
    setArticle(true);
    setQuestion(false);
  };
  return (

    <>
      <div className="First">
        <h2 className="Main_Heading">New Post</h2>
      </div>

      <form className="Form">
        <h2 className="Options">Select post option: </h2>

        <input type="radio" id="question" name="type" value="Question" onClick={handleQuestionClick} />
        <label for="question">Question</label>

        <input type="radio" id="article" name="type" value="Article" onClick={handleArticleClick} />
        <label for="article">Article</label>
      </form>





      {question &&
        <div>
          <div className="Question">
            <p className="Header">What do you want to ask or share</p>
          </div>
          <div className="Title">
            <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title" />

          </div>
          <div className="Second_Heading">
            <h3 className="textbox">Describe your Problem</h3>
            <textarea id="area" rows="10" cols="50" placeholder="Enter your question" />
          </div>
          <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags" />
          </div>
          <div className="button">
            <button>Post</button>

          </div>
        </div>
      }







      {article &&
        <div>
          <div className="Question">
            <p className="Header">What do you want to ask or share</p>
          </div>
          <div className="Title">
            <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Enter your article" name="title" />

          </div>
          <div>
          <h3 className="textbox">Abstract</h3>
            <textarea id="area" rows="3" cols="50" placeholder="Enter a 1 paragraph abstract" />
          </div>
          <div className="Second_Header">
            <h3 className="textbox">Describe your Problem</h3>
            <textarea id="area" rows="10" cols="50" placeholder="Enter a 1 paragraph abstract" />
          </div>
          <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags" />
          </div>
          <div className="button">
            <button>Post</button>

          </div>
        </div>
      }


    </>
  )
}
export default App;