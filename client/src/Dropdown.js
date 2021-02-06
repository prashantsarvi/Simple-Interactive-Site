import React from 'react';
import Card from './Card.js';
class Dropdown extends React.Component
{
    constructor(props){
        super(props);
        this.state= {
            selectedItem:null,
            itemText:null
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event){

    this.setState({selectedItem: event.target.value, 
        itemText: event.target.options[event.target.selectedIndex].text});

}
    render(){
        return (
       <div><h1>Choose a Course</h1>
       <div><select value={this.state.selectedItem} onChange={this.changeValue}>
            <option value="web">Web Development</option>
            <option value="cloud">Cloud Computing</option>
            <option selected value="ti">Technology Innovation</option>
            <option value="internship">Internship</option>
          </select></div>
          <br/><br/><br/><br/>
          <div><Card cardValue={this.state.selectedItem} cardText={this.state.itemText}/></div>
          </div>

        );
    }
}

export default Dropdown;