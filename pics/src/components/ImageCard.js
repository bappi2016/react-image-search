import React from 'react';


class ImageCard extends React.Component{

    // we are now creating a constructor function because we need a react referrence or react ref
    constructor(props){
        super(props);
        this.state = {spans: 0 };
        // create a react ref of the component image
        this.imageRef = React.createRef(); // we call React.createRef then we assign it to some instance variable that we can refer back to it later on inside of our class.
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);

        this.setState({spans : spans});
    };

    render(){

        // destructuring the props object this.props.image with key urls and description

        const {urls,description} = this.props.image
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} 
                // we create a prop ref which value is the instance variable - imageRef which will tell us about image DOM NOde
                src={urls.regular} 
                alt= {description}/>
            </div>
        );
            
        
    }
};

export default ImageCard;