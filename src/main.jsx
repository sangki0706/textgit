import { createRoot } from "react-dom/client";
import Router from "./router.jsx";
import "./index.css";
import { TanstackQueryProvider } from "./tanstack-query/client.jsx";


createRoot(document.getElementById("root")).render(
    <TanstackQueryProvider>
        <Router/>
    </TanstackQueryProvider>

);