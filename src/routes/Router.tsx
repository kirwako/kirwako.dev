import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Suspense
					fallback={
						<div className="text-center mt-4 text-white " >
							Loading...
						</div>
					}
				>
					<Routes>
						<Route path={routes.home} element={<Home />} />
						<Route
							path="*"
							element={<Navigate to={routes.home} replace />}
						/>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
};

export default Router;
