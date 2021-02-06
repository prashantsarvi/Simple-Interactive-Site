import React from 'react';

class Card extends React.Component
{
    render(){
        const details={
            web: 'Develop Web Application',
            cloud: 'Learn Cloud Services ',
            ti:'Design Technology Innovation',
            internship:'Prerequsites before Internship'
        };
        return (
       <div style={{border:'1px solid', display:'inline-block', 
                    width:'300px',height:'100px',boxShadow:'2px 3px blue', color:'green' }}>
        <h3>{this.props.cardText || 'Card Title'}</h3>
        <hr/>
        {details[this.props.cardValue] || 'Card Description'}
       </div>
        );
    }
}



export default Card;
