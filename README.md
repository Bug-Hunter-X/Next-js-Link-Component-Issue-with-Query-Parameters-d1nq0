# Next.js Link Component Issue with Query Parameters

This repository demonstrates a common issue with Next.js's Link component when using query parameters. The `Link` component renders correctly but does not navigate to the intended URL. The bug is related to how query parameters are handled within the Link component. The solution involves properly encoding the query parameters in the URL.

## Bug

The provided code uses the Next.js `Link` component to create links to different pages.  The link to `/contact` includes query parameters.  However, this link may not work correctly or may fail silently, preventing navigation to the contact page with the expected query parameters.

## Solution

The solution uses the `URL` object to correctly format the URL with query parameters before passing it to the `Link` component. This ensures that the query parameters are properly encoded and the navigation works as expected.