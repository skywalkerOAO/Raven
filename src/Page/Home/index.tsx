
import React from 'react'
import './index.scss'
interface IProps {
    name: number;
}

interface IState {
    count: number;  
}

class Home extends React.Component<IProps, IState> {
    state = {
        count: 0
    };
    componentDidMount() {
     
    }
    render() {
        return (
        <>
        <li>Welcom use EL-TS </li>
        <li>Create by Hexar</li>
        <li></li>
        </>
        );
    }
}

export default Home;
