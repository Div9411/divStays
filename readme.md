# divStays

Welcome to the divStays app documentation. divStays is a user-friendly hotel management application designed to streamline hotel operations, including sales statistics, cabin management, user management, booking management, and various customization options. It integrates authentication, database storage, and dark mode features, among other functionalities.

## 💻 Technology Used

divStays Application is built using the following technologies and libraries:

- **React:** JavaScript library for UI development.
- **Supabase:** Cloud database service for real-time and secure data storage.
- **@tanstack/react-query:** Data-fetching and state management library for React.
- **date-fns:** JavaScript date utility library for parsing, formatting, and manipulating dates.
- **react-router-dom:** Library for routing and navigation in React apps.
- **recharts:** Composable charting library for React.
- **styled-components:** CSS-in-JS library for styling React components.
- **react-hot-toast:** Customizable toast notification library for React.
- **react-icons:** Collection of customizable icons for React apps.
- **react-hook-form:** Library for form state management and validation in React.

## Key Features 📝

### Authentication and Authorization

- Users are hotel employees and can log in to the application to perform tasks.
- New users can only be signed up within the application to ensure that only actual hotel employees can get accounts.
- Users can upload an avatar, change their name, and password.

### Cabins

- Table view with cabin details including photo, name, capacity, price, and current discount.
- Users can update, delete, or create new cabins (including uploading a photo).

### Bookings

- Table view with booking details including arrival and departure dates, status, paid amount, cabin, and guest data.
- Booking status can be "unconfirmed," "checked in," or "checked out," and the table is filterable by status.
- Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast is booked.

### Check In/Out

- Users can delete, check-in, or check out a booking as the guest arrives.
- Payments are accepted outside the app, and users confirm payment receipt inside the app.
- Guests can add breakfast on check-in if not already booked.

### Guests

- Guest data includes full name, email, national ID, nationality, and a country flag for easy identification.

### Dashboard

- Initial screen displaying important information for the last 7, 30, or 90 days.
- Lists guests checking in and out on the current day with task capabilities.
- Statistics on recent bookings, sales, check-ins, and occupancy rate.
- Charts showing daily hotel sales, total and extras sales, and stay durations.

### Settings

- Users can define application-wide settings: breakfast price, min and max nights/booking, max guests/booking.
- Dark mode available.

## 🎮 Demo Account

You can access our application using the following demo account:

- **Email Address:** divyansh@example.com
- **Password:** divyansh9411
