import React from 'react';
import './custom.css'


// const Heart = () => {

//     const toggle = () => {
//         var btn=document.getElementById("btn");
//         if (btn.classList.contains("far")){
//             btn.classList.remove("far");
//             btn.classList.add("fas");
//         }
//     }
//     return (
//             <div>
//                 <button  onClick={this.toggle()}>
//                     <svg  id="btn" width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-heart far" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
//                     </svg>
//                     </button>
//             </div>
//         );
// }

// export default Heart;



class Heart extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name:"gray"
    };
}
    like (){
        console.log("clicked");
        if(this.state.name == "gray"){
            this.setState({
                name:"red"
            })
        }
        else{
            this.setState({
                name:"gray"
            })
        }
             
            }
    render() {
        return (
                <div>
                    <button  onClick={() => this.like()}>
                    {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg> */}
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill " fill={this.state.name} xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </button>
                </div>
                     );
    }
}

export default Heart;
