import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../src/actions';

type regDataObj = {
    type?: string, 
    id: string
}

interface IIndexProps {
    checkSignInStatus(regDataObj: regDataObj): void;
}

class Index extends Component<IIndexProps, {}> {
    constructor(props: any) {
        super(props);
        this.props.checkSignInStatus({id: 'testId'});
    }
    render() {
        const { members }: any = this.props;
        return (
            <>
                <React.Fragment>
                    <h1>index page</h1>
                    <h2>hello {members.id ? members.id : 'Guest' }</h2>
                </React.Fragment>
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
      members: state.members
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        checkSignInStatus: bindActionCreators(actions.checkSignInStatus, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);