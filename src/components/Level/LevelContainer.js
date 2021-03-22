import React from 'react';
import {connect} from 'react-redux';
import Level from './Level';
import {newGameThunk, readLevelThunk, selectBoxThunk, selectFlagThunk, startLevelThunk} from '../../store/levelReducer';

class LevelContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {first: null, second: null, firstSelect: false, mines: props.minMines};
    }

    componentDidMount() {
        this.props.readLevel(this.props.select);
    }

    newGame() {
        this.setState({firstSelect: false});
        this.props.newGame({level: this.props.level});
    }

    setFlags(select) {
        this.props.selectFlag({...this.props, ...select});
        const mines=this.props.level[select.first][select.second].flags ? this.state.mines+1 : this.state.mines-1;
        console.log(mines);
        this.setState({mines});
    }


    touchBox(select) {
        this.setState(select);
        if (this.state.firstSelect) {
            console.log(select);
            this.props.selectBox({...this.props, ...select});
        } else {
            this.props.startLevel({...this.props, ...select});
            this.setState({firstSelect: true});
        }
    }

    render() {
        return (
            <>
                <Level state={this.state} {...this.props} touchBox={this.touchBox.bind(this)}
                       newGame={this.newGame.bind(this)}
                       setFlags={this.setFlags.bind(this)}/>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        select: state.levelStart.select,
        level: state.levelStart.level,
        minMines: state.levelStart.minMines,
    };
};

export default connect(mapStateToProps, {
    readLevel: readLevelThunk,
    startLevel: startLevelThunk,
    selectBox: selectBoxThunk,
    newGame: newGameThunk,
    selectFlag: selectFlagThunk,
})
(LevelContainer);
