// Challenge / Exercise
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Homepage from "./pages/Home";
import EventsPage from "./pages/Events";

import EventDetailsPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Homepage /> },
			{ path: "events", element: <EventsPage /> },
			{ path: "events/:eventId", element: <EventDetailsPage /> },
			{ path: "events/new", element: <NewEventPage /> },
			{ path: "events/eventId/edit", element: <EditEventPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
