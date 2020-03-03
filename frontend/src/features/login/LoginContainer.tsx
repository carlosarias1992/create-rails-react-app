import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import { login } from "../../redux/actions/session";
import SessionForm from "./../session/SessionForm";
import { User } from "../../types";
import { SessionForm as SessionFormEnum } from "../../enums";

const mapDispatchToProps = (
    dispatch: any
): { onSubmit: (arg0: User) => any } => ({
    onSubmit: (user: User): any => dispatch(login(user))
});

export default compose(
    withProps({ formTypeKey: SessionFormEnum.LOGIN }),
    connect(null, mapDispatchToProps)
    // @ts-ignore
)(SessionForm);
