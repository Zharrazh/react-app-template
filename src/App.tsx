import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { TrainCreatePage } from "./pages/trains/TrainCreatePage";
import { TrainListPage } from "./pages/trains/TrainList";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="trains" replace />} />
          <Route path="trains">
            <Route index element={<TrainListPage />} />
            <Route path="create" element={<TrainCreatePage />} />
          </Route>
          <Route path="*" element={"404 Not found"}></Route>
        </Route>
      </Routes>
    </div>
  );
};
