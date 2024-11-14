// Challenge / Exercise
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Homepage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import Error from "./pages/Error";

import EventDetailsPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						errorElement: <Error />,
						loader: eventsLoader,
					},
					{ path: ":eventId", element: <EventDetailsPage /> },
					{ path: "new", element: <NewEventPage /> },
					{ path: ":eventId/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
