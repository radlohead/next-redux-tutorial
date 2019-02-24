import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
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

export default connect(mapStateToProps)(Index);