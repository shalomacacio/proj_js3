import React from 'react';
import { Routes, Route } from "react-router-dom";

import Agenda from './pages/Agenda';
import Inadimplencias from './pages/Relatorios/Financeiro/Inadimplencias';
import SlaGarantia from './pages/Relatorios/Financeiro/Inadimplencias/SlaGarantia';

const MainRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <Inadimplencias />}/>
          <Route path="/agenda" element={ <Agenda />}/>
          <Route path="/sla-garantia" element={ <SlaGarantia />}/>
      </Routes>
  );
};

export default MainRoutes;
