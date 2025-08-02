import { useRouteError } from "react-router-dom";
function Error() {
    const err = useRouteError();
    return (
        <>
            <h1>Oops! </h1>
            <h1>Page Not Found</h1>
        </>
    )
}
export default Error;