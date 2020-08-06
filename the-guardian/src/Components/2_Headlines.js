import React from 'react';
import App from '../App';
import '../App.css';
import './2_Headlines.css';
import {img} from './images/3000.jpg'

function Headlines(props) {
    const todayDate = Date.now();
    const today = new Date(todayDate);
    return (
        <div className='main'>
            <aside>
                <h6>Headlines</h6>
                 <h6 style={{color :'red'}}>{today.toDateString()}</h6>
            </aside>
            <section> 
                <div id="headlinesSection">
                <div id="headlinesSection1"><img src={require('./images/5472.jpg')} style={{width:'100%',height:'66%'}}/>
                <p style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div id="headlinesSection2">
                <img src={require('./images/4000.jpg')} style={{width:'100%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div id="headlinesSection3">
                    <img src={require('./images/3000.jpg')} style={{width:'100%',height:'66%'}}/>
                    <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
                    <hr/>
                    <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                </div>
                <div id="headlinesSection4">
                
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from </p>
                    <hr/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                </div>
            </section>
            
        </div>
    );
}

export default Headlines;
