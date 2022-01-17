import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route , Switch as Routes , Link , NavLink, useParams} from 'react-router-dom';
import BrandRegister from './pages/BrandRegister';
import BrandLogoRegister from './pages/BrandLogoRegister';
import BrandCategoryRegister from './pages/BrandCategoryRegister';
import Intro from "./pages/Intro";
import Mypage from './pages/Mypage';
import Member from './pages/Member';
import CostProcessGuide from './pages/CostProcessGuide';
import Center from './pages/Center';





function Home(){
    return(
        <div>
            <h2>Home</h2>
            Home...
            <Link to="/brandregister"> 
            상품등록하기
            </Link>
        </div>
    )
}

var contents = [
    {id:1, title:"HTML", description:'HTML is ...'},
    {id:2, title:"JS", description:'JS is ...'},
    {id:3, title:"React", description:'React is ...'},
    {id:4, title:"React1", description:'React is ...'},
    {id:5, title:"React2", description:'React is ...'},
    {id:6, title:"React3", description:'React is ...'},
    {id:7, title:"React123", description:'123as is ...'}
]

function Topic(){
    var params = useParams();
    var topic_id = params.topic_id;
    var selected_topic ={
        title:'Sorry',
        description : 'Not Found'
    }
    for (var i=0; i<contents.length; i++){
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return (

        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    )
}

function Topics(){
    var lis = [];
    for(var i=0; i<contents.length;i++){
        lis.push(<li key={contents[i].id}><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>)
    }
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Route path="/topics/:topic_id">
                <Topic></Topic>
            </Route>
            <Routes>
            </Routes>
        </div>
    )
}


function App(){
    return(
        <div className='app'>
            <Routes>
                <Route exact path="/"><Intro></Intro></Route>
                <Route path="/brandregister"><BrandRegister></BrandRegister></Route>
                <Route path="/brandlogoregister"><BrandLogoRegister></BrandLogoRegister></Route>
                <Route path="/brandcategoryregister"><BrandCategoryRegister></BrandCategoryRegister></Route>
                <Route path="/mypage"><Mypage/></Route>
                <Route path="/member"><Member/></Route>
                <Route path='/costprocess'><CostProcessGuide/></Route>
                <Route path='/center'><Center/></Route>
                <Route path="/">Not found</Route>
            </Routes>
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

reportWebVitals();
