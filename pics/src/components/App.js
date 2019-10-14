import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component {

    // define the initial state of our component

    state = { images : [] } ;// as because our response data is an arrow we take an empty [] as initial state

    // now create a call back function which will pass as a prop in the child component to grab the seacrh term when search form is submit

    // this is a call back funtion so if we refer this function with this keywork we have to bind this function with this and thus we have to  conver this function to a fat arrow function
    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos",{
        params : {query : term},
        });

        this.setState({images: response.data.results}); // update the state with setState and assign the result to images
    }
    

    render(){
        return  (
            <div className="ui container" style={{marginTop:'10px'}}> 
            {/* pass the call back function onSearchSubmit as the event handler on the prop onSubmit [because we are inside our component we have the freedom tho call the prop name anything we want like onSubmit or onFromSubmit ...  ] */}
            {/* the SearchBar is going to call the function onSearchSubmit when the event onSubmit occure */}
            <SearchBar onSubmit = {this.onSearchSubmit}/> 
            {/* here this.onSearchSubmit is the props object that is declared as this.props on the onFormSubmit call back function  */}
            <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;