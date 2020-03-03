import React, { useState, useEffect, useRef } from "react";
import { FormGroup, TextField, Button } from "@material-ui/core";
import { SessionForm as SessionFormEnum } from "../../enums";
import { capitalize } from "../../utils";
import "./SessionForm.css";
import { UserWithPassword } from "../../types";
import { AxiosResponse } from "axios";

type SessionFormEnumKey = keyof typeof SessionFormEnum;

interface FormMountedRef {
    current: boolean;
}

interface Props {
    formTypeKey: SessionFormEnumKey;
    onSubmit: (arg0?: { user: UserWithPassword }) => Promise<AxiosResponse>;
    setToLoginPage: (arg0: boolean) => void;
}

function handleInput(
    callback: (arg0: string) => void
): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
        callback(e.target.value);
    };
}

function useUnmounted(): FormMountedRef {
    const mounted = useRef(true);
    useEffect(
        (): (() => void) => (): void => {
            mounted.current = false;
        },
        []
    );
    return mounted;
}

function handleSubmit(
    username: string,
    password: string,
    formMounted: FormMountedRef,
    setSubmitting: (arg0: boolean) => void,
    props: Props
): (e: React.FormEvent<HTMLFormElement>) => void {
    return (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSubmitting(true);

        let user = {
            username: username,
            password: password
        };

        props
            .onSubmit({ user })
            .then((): void => {
                if (formMounted.current) setSubmitting(false);
            })
            .catch((): void => {
                if (formMounted.current) setSubmitting(false);
            });
    };
}

function SessionForm(props: Props) {
    const { formTypeKey, setToLoginPage } = props;
    const formType = SessionFormEnum[formTypeKey];
    const otherFormType =
        SessionFormEnum[
            formTypeKey === SessionFormEnum.REGISTER
                ? SessionFormEnum.LOGIN
                : SessionFormEnum.REGISTER
        ];

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const formMounted = useUnmounted();

    return (
        <>
            <form
                onSubmit={handleSubmit(
                    username,
                    password,
                    formMounted,
                    setSubmitting,
                    props
                )}
            >
                <h3>{capitalize(formType)}</h3>
                <FormGroup>
                    <TextField
                        className="SessionForm--Input"
                        label="Username"
                        value={username}
                        variant="outlined"
                        size="small"
                        onChange={handleInput(setUsername)}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        className="SessionForm--Input"
                        label="Password"
                        type="password"
                        value={password}
                        variant="outlined"
                        size="small"
                        onChange={handleInput(setPassword)}
                    />
                </FormGroup>
                <Button type="submit" disabled={submitting}>
                    {formType}
                </Button>
            </form>
            <p>Want to {otherFormType.toLowerCase()} instead?</p>
            <Button
                onClick={() =>
                    setToLoginPage(formTypeKey === SessionFormEnum.REGISTER)
                }
            >
                Take me to {otherFormType.toLowerCase()}
            </Button>
        </>
    );
}

export default SessionForm;
