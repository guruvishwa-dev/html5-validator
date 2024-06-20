import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HtmlValidator } from "../validator/html-validator";
import { AuthenticationForm } from "./loginPage";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path="login" element={<AuthenticationForm />} />

            <Route path="validator">
                <Route path="html-validator" element={< HtmlValidator />} />
            </Route>
        </Route>
    )
)

export default routes