import { createContext } from "react";

// Data of User
export const userDataContext = {
    "id": "01",
    "name": "Mohd Sameer",
    "age": 19,
    "salary": 6000,
}

// Creating A Context
export const DashboardContext = createContext(null);