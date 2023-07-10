import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/introduction/Introduction";
//basic sintax
import VariablesTypesData from "./pages/basic-sintax/VariablesTypeData";
import Operators from "./pages/basic-sintax/Operators";
import FlowControl from "./pages/basic-sintax/FlowControl";
import FunctionScope from "./pages/basic-sintax/FunctionScope";
// document object model
import WhatsDom from "./pages/dom/WhatsDom";
import SelectingElement from "./pages/dom/SelectingElement";
import Modification from "./pages/dom/Modfication";
import EventHandling from "./pages/dom/EventHandling";
// arrays and ojects
import Array from "./pages/arrays and objects/Array";
import Object from "./pages/arrays and objects/Object";
import Json from "./pages/arrays and objects/JSON";
// advanced function
import HighOrderFunction from "./pages/advanced functions/HighOrderFunction";
import CallbackPromise from "./pages/advanced functions/CallbackPromise";
import ArrowFunction from "./pages/advanced functions/ArrowFunction";
import Closure from "./pages/advanced functions/Closure";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route
          path="/basic-sintax/variables-and-data-types"
          element={<VariablesTypesData />}
        />
        <Route path="/basic-sintax/operators" element={<Operators />} />
        <Route
          path="/basic-sintax/flow-control-structure"
          element={<FlowControl />}
        />
        <Route
          path="/basic-sintax/functions-and-scope"
          element={<FunctionScope />}
        />
        <Route
          path="/document-object-model/what-is-dom"
          element={<WhatsDom />}
        />
        <Route
          path="/document-object-model/selecting-element"
          element={<SelectingElement />}
        />
        <Route
          path="/document-object-model/modifcation"
          element={<Modification />}
        />
        <Route
          path="/document-object-model/event-handling"
          element={<EventHandling />}
        />
        <Route path="/arrays-and-objects/arrays" element={<Array />} />
        <Route path="/arrays-and-objects/objects" element={<Object />} />
        <Route path="/arrays-and-objects/json" element={<Json />} />
        <Route
          path="/advanced-functions/high-order-functions"
          element={<HighOrderFunction />}
        />
        <Route
          path="/advanced-functions/callbacks-and-promises"
          element={<CallbackPromise />}
        />
        <Route
          path="/advanced-functions/arrow-functions"
          element={<ArrowFunction />}
        />
        <Route path="/advanced-functions/closures" element={<Closure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
