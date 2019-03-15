import React from 'react';

class Form extends React.Component {//третий вариант записи ,самый большой
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type='text' name='city' placeholder='City'/>
                <button className="btn btn-light">Get weather</button>
            </form>
        );
    }
}

export default Form;