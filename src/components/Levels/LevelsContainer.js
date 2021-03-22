import React from "react";
import {connect} from "react-redux";
import Levels from './Levels';
import {openLevelAction} from '../../store/levelReducer';

class LevelsContainer extends React.Component{

    openLevel(select){
        this.props.openLevel(select);
    }

    render() {
        return (
            <>
                <Levels {...this.props} openLevel={this.openLevel.bind(this)}/>
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        levels: state.levelsPage.levels
    }
};

export default
    connect(mapStateToProps, {
        openLevel:openLevelAction
    })
(LevelsContainer);
