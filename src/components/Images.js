import React from 'react';
import './custom.css';
import Im1 from './assets/h1.jpg'
import Im2 from './assets/h2.jpg'
import Im3 from './assets/h3.jpg'
import Im4 from './assets/h4.jpg'
import Im5 from './assets/h5.jpg'
import Heart from './Heart';
import Details from './Details';

const Images = (props) => {
    return (
        <div class="Container">
            <div class="row">
                <div  class="imgalign col-xl-3 col-md-4 col-sm-6" >
                    
                    <img src={Im1}/>
                    <Heart/>
                    <Details
                        name="LUXURY"
                        place="Jaipur"
                        money="5000"
                        rate="4.8"
                        company="Grace Hotel"/>

                </div>
                
                
                <div class="imgalign col-xl-3 col-md-4 col-sm-6">
                    <img  src={Im2}/>
                    <Heart/>
                    <Details
                        name="POPULAR"
                        place="Kochi"
                        money="4000"
                        rate="5"
                        company="Olympic Hotel"/>
                </div>
                
                <div class="imgalign col-xl-3 col-md-4 col-sm-6">
                    <img  src={Im3}/>
                    <Heart/>
                    <Details
                        name="LUXURY"
                        place="Banglore"
                        money="8000"
                        rate="4.2"
                        company="Hotel White Santorini"/>
                    
                </div>
                
                <div class="imgalign col-xl-3 col-md-4 col-sm-6">
                    <img  src={Im4}/>
                    <Heart/>
                    <Details
                        name="LUXURY"
                        place="Mumbai"
                        money="7000"
                        rate="4.1"
                        company="Island Hotel"/>
                    
                </div>

                <div class="imgalign col-xl-3 col-md-4 col-sm-6">
                    <img  src={Im5}/>
                    <Heart/>
                    <Details
                        name="LUXURY"
                        place="Goa"
                        money="11000"
                        rate="4.1"
                        company="Nira Hotel"/>
                    
                </div>
                
                
                
                
                
            </div>
        </div>
    );
}


export default Images;