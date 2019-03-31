import React from 'react';
import './app-2.css';

import './fontello/css/up.css';



class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handelUpVote = this.handelUpVote.bind(this);
    }

    handelUpVote() {
        this.props.onVote(this.props.id);
    }

    render() {


        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} alt='default' />
                </div>
                <div className='middle aligned content'>
                    <div className='votes'>
                        <i className='icon-angle-circled-up up' onClick={this.handelUpVote} />
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href='http://localhost:3000' id='title'>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:  </span>
                        <img className='ui avatar image' src={this.props.submitterAvatarUrl} alt='img' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;