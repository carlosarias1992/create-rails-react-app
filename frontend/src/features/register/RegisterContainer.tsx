import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import SessionForm from "./../session/SessionForm";
import { signup } from "../../redux/actions/session";
import { User } from "../../types";
import { SessionForm as SessionFormEnum } from "../../enums";

const mapDispatchToProps = (dispatch: any) => ({
    onSubmit: (user: User) => dispatch(signup(user))
});

export default compose(
    withProps({ formTypeKey: SessionFormEnum.REGISTER }),
    connect(null, mapDispatchToProps)
    // @ts-ignore
)(SessionForm);
