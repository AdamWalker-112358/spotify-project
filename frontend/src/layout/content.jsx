import React from 'react';
import styled from 'styled-components'


const Content = ({children}) => {
    return (
        <Styles className='content'>
            {children}
        </Styles>
    );
}


const Styles = styled.div`
    
    flex-grow: 1;
    height: 100%;
    overflow: scroll;
    padding: 20px;
    background-color: #f9f9f9;




`

export default Content;
