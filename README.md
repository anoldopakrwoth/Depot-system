# Depot record dashboard

Open `index.html` in a browser to preview the dashboard. It is a self-contained prototype with no build step.

Included in this first slice:

- Manager home with today's opening / in / out / closing stock, sales, debtors, low-stock alarms, fleet status, clocked-in staff, cash at hand, bank and mobile money
- Inventory control with product stock levels and stock movement examples
- Sales and customer section with invoices, payment/debt examples and debtor tracking
- Fleet and driver section with loading sheets, trip progress and fuel examples
- Immutable-style staff activity log showing who did what, when and where
- Expenses and end-of-day cash reconciliation section
- Manager overview with activity, role contribution, completion and review metrics
- Recent records table with search
- Manager-created user flow with role assignment
- New record flow with category and notes
- Responsive layout for smaller screens

The current data is client-side demo data. A production version should connect the forms to an authenticated API and enforce permissions on the server, not only in the interface.
