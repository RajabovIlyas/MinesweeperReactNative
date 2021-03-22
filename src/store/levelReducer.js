const OPEN_LEVEL = 'OPEN_LEVEL';
const SELECT_LEVEL = 'SELECT_LEVEL';
import {levels} from '../levels/levels';


let initialState = {
    select: null,

};


const levelReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LEVEL: {
            return {...state, select: action.select};
        }
        case SELECT_LEVEL: {
            return {...state, ...action.date};
        }
        default:
            return {...state};
    }
    return state;
};
export const openLevelAction = (select) => ({type: OPEN_LEVEL, select});
export const selectLevelAction = (date) => ({type: SELECT_LEVEL, date});

export const readLevelThunk = (select) => dispatch => {
    dispatch(selectLevelAction(levels[select]));
};

export const startLevelThunk = (date) => dispatch => {
    let arrayMines = new Array();
    //console.log('my select:' + date.first + '_+_' + date.second);
    for (let i = 0; i < date.minMines; i++) {
        let first = Math.floor(Math.random() * Math.floor(9));
        let second = Math.floor(Math.random() * Math.floor(9));
        if (date.level[first][second].content === 0 && date.level[first][second].type === true) {
            if (date.first - 1 <= first && date.first + 1 >= first && date.second - 1 <= second && date.second + 1 >= second) {
                //console.log(first + '-' + second);
                i--;
            } else {
                //console.log(first + '+' + second + '------' + date.level[first][second].content);
                date.level[first][second].content = -1;
                arrayMines.push({first, second});
            }
        } else {
            //console.log(first + '-' + second+'dont null-'+date.level[first][second].content);
            i--;
        }
    }
    //arrayMines.forEach(p=>console.log(p));
    arrayMines.forEach(p => {
        let i = (p.first > 0) ? p.first - 1 : p.first;
        //console.log((9<date.level.length-1)?p.first+1:p.first);
        const iEnd = (p.first < date.level.length - 1) ? p.first + 1 : p.first;
        while (i <= iEnd) {
            //console.log('err: '+((p.second<date.level[0].length-1)?p.second+1:p.second));
            let n = (p.second > 0) ? p.second - 1 : p.second;
            while (n <= ((p.second < date.level[0].length - 1) ? p.second + 1 : p.second)) {
                //console.log({i,n});
                if (date.level[i][n].content !== -1 && date.level[i][n].type === true) {
                    date.level[i][n].content++;
                }
                n++;
            }
            i++;
        }
    });
    const openZeroBox = async (select) => {
        if (date.level[select.first][select.second].content === 0) {
            const iEnd = (select.first < date.level.length - 1) ? select.first + 1 : select.first;
            const nEnd = ((select.second < date.level[0].length - 1) ? select.second + 1 : select.second);
            for (let i = ((select.first > 0) ? select.first - 1 : select.first); i <= iEnd; i++) {
                for (let n = ((select.second > 0) ? select.second - 1 : select.second); n <= nEnd; n++) {
                    if (date.level[i][n].type) {
                        if (!(date.level[i][n].checkBox) && date.level[i][n].content === 0) {
                            date.level[i][n].checkBox = true;
                            date = await openZeroBox({first: i, second: n});
                        } else {
                            date.level[i][n].checkBox = true;
                        }
                    }
                }
            }
        } else {
            date.level[select.first][select.second].checkBox = true;
        }
    };
    console.log({first: date.first, second: date.second});
    openZeroBox({first: date.first, second: date.second}).then(r => dispatch(selectLevelAction({level: date.level})));
    //dispatch(selectLevelAction({levels: date.levels}));
};

export const selectBoxThunk = (date) => dispatch => {
    const openZeroBox = async (select) => {
        if (date.level[select.first][select.second].content === 0) {
            const iEnd = (select.first < date.level.length - 1) ? select.first + 1 : select.first;
            const nEnd = ((select.second < date.level[0].length - 1) ? select.second + 1 : select.second);
            for (let i = ((select.first > 0) ? select.first - 1 : select.first); i <= iEnd; i++) {
                for (let n = ((select.second > 0) ? select.second - 1 : select.second); n <= nEnd; n++) {
                    if (date.level[i][n].type) {
                        if (!(date.level[i][n].checkBox) && date.level[i][n].content === 0) {
                            date.level[i][n].checkBox = true;
                            date = await openZeroBox({first: i, second: n});
                        } else {
                            date.level[i][n].checkBox = true;
                        }
                    }
                }
            }
        } else {
            date.level[select.first][select.second].checkBox = true;
        }
    };
    openZeroBox({first: date.first, second: date.second}).then(r => dispatch(selectLevelAction(date.level)));
    //dispatch(selectLevelAction({levels: date.levels}))
};

export const selectFlagThunk = (date) => dispatch => {
    if (!date.level[date.first][date.second].checkBox) {
        date.level[date.first][date.second].flags = date.level[date.first][date.second].flags ? false : true;
        dispatch(selectLevelAction({...date.level}));
    }
};

export const newGameThunk = (date) => dispatch =>{
    date.level.map(p=>{
        p.map(b=>{
            b.checkBox=false;
            b.content=0;
            b.flags=false;
        });
    });
    dispatch(selectLevelAction(...date.level));
};


export default levelReducer;
