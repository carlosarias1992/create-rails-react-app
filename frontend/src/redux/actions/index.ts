export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

interface ApiResponse {
    response: {
        data: {
            errors?: string[];
        };
    };
}

export const receiveErrorsAction = ({
    response
}: ApiResponse): { type: string; errors: string[] } => {
    return {
        type: RECEIVE_ERRORS,
        errors: response.data?.errors || [
            "Something went wrong. Try again shortly."
        ]
    };
};
