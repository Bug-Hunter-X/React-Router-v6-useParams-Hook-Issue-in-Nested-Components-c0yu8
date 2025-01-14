# React Router v6 useParams Hook Issue in Nested Components

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6 within nested components. The `useParams` hook is designed to work directly within route components, but attempts to access it outside this context will not return the expected values.

The `IncorrectParamUsage.js` file showcases the incorrect usage that leads to the error. In contrast, the `CorrectParamUsage.js` file illustrates the correct approach to accessing route parameters in nested components using the `useOutletContext` hook.