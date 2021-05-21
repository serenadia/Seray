import React, { Component } from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux/actions/index'

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        const {currentUser} = this.props;

        console.log()
        if(currentUser == undefined) {
            return (
                <View>
                    
                </View>
            )
        }
        return (
            <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text>{currentUser.name} is logged in</Text>
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetch}, dispatch)


export default connect(mapStateToProps, mapDispatchProps)(Main);