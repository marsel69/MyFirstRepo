import React from 'react';


const SearchPanel = () => {

    const searchText ='Ask me everything';
    const searchStyle = {
        fontSize:'20px'
    }
    return (

        <input
        style={searchStyle}
        placeholder={searchText}
        className="myClass"
        />
    );
}
export default  SearchPanel;