import React from 'react';

class SearchBar extends React.Component{

 // we are creating a method to grab the input
    // onInputChange(event){
    //     console.log(event.target.value) 

    state = {term: ''}; // initialise the state with '' and assign it to term

    // create the callback function to customise the submit event
    // arrow function automatically bind the value of this keyword for all the code inside the function.Thus now this.state.term is pointing to the term of the input element
    onFormSubmit = (event) => {
        event.preventDefault(); // this will prevent from rerender the page on click enter after type in the input box
        console.log(this.state.term); // now this.state.term reffering to the value of the state which is assign to the term.so here this will make sure that  the value of this will always be the instance of the sarch bar 
        this.props.onSubmit(this.state.term); // because we are inside a class we will refer the incoming props object from parent by this.props.onSubmit and pass the search item by the argument this.state.term. 
        // here this.props is the props object that is passed to the component SearchBar, and is going to be the value of this inside onSubmit.
    };
    

    render () {
        return (
        <div className="ui segment">
        {/* pass the call back function onFormSubmit as the event handler on the prop onSubmit */}
            <form onSubmit={this.onFormSubmit} className="ui form" action="">
            <div className="field">
            <label htmlFor="">Image search</label>
            {/* create a new prop onChange and pass the referrence of the method or a call back function onInputChange- but not with the parenthesis */}
            <input type="text" 
            value = {this.state.term} // here we reassign or override  the value prop by the text that is inside of the input by  {this.state.term}
            // what ever the string inside the term will assige to the prop value. 
            onChange={e => this.setState({term: e.target.value})}/> 
            {/* inside the body of callback function {} we take the event object e and pull the changes in the input by e.target.value and then we update the state on our component with the new value by this.setState and render method will call 2nd time */}

            {/*input type="text" onChange={(event) => console.log(event.target.value)}  */}
            </div>
            
            
            </form>
        </div>
        );
    }
}

export default SearchBar;