import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthTC()
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthTC})(HeaderContainer);
