import './App.css';
import profilepic from './medium_profile_pic_2.png';
import React from 'react'
import TypeWriter from 'react-typewriter';
import FadeIn from 'react-fade-in';

var delays = [{
  at:2,
  delay: 1000
},
{
  at:16,
  delay: 1000
}];

class Introduction extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      description: null
    };
  }

  addDesc = () => {
    this.setState({
      description: [<FadeIn delay={800} transitionDuration={800}>I'm currently a system QA engineer at Shopee Singapore;
      <br/>
      On the sidelines, I write on technical topics, build/hack random things on my own, and enjoy dwelving into philosophy topics;
      <br/>
      I consider my life lived when I have engineered a significant solution for mother earth;</FadeIn>]
    });
  }

  render(){
    return(
        <div className="homepage">
        <div className="intro">

          <div className="intro-text">
            <h1>
              <TypeWriter typing={1} delayMap={delays} onTypingEnd ={ () => this.addDesc()}>
                Hi,<br/> I'm Eva Hiew, <br/>
              </TypeWriter>
            </h1>
            <h3>{this.state.description}</h3>
          </div>

          <FadeIn delay={200} transitionDuration={800}>
            <img src={profilepic} className="intro-img" alt="pic"/>
          </FadeIn>

        </div>

          <ul>
            <div className="image-link-panel">

              <li>
                <a title="drop me an email!" href="mailto:eva_hiew@live.com" target="_blank">
                  <i class="fa-solid fa-at fa-2xl" alt="mail"></i>
                </a>
              </li>

              <li>
                <a title="connect with me on linkedin!" href="https://www.linkedin.com/in/eva-hiew" target="_blank">
                  <i class="fa-brands fa-linkedin fa-2xl" alt="linkedin"></i>
                </a>
              </li>

              <li>
                <a title="here's my resume!" href="Eva Hiew Sook Yee - Public.pdf" target="_blank">
                  <i class="fa-solid fa-id-badge fa-2xl" alt="linkedin"></i>
                </a>
              </li>

            </div>
          </ul>

        </div>
    );
  }
}

function App() {
  return (
    <div>
      <Introduction/>

    </div>
  );
}

export default App;
