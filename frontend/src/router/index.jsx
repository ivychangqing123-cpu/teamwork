cat > src/router/index.jsx <<'EOF'
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import CompanionChat from "../pages/CompanionChat";
import DiaryResult from "../pages/DiaryResult";
import MemoryGarden from "../pages/MemoryGarden";
import MemoryDetail from "../pages/MemoryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <CompanionChat />,
  },
  {
    path: "/diary-result",
    element: <DiaryResult />,
  },
  {
    path: "/memory-garden",
    element: <MemoryGarden />,
  },
  {
    path: "/memory/:id",
    element: <MemoryDetail />,
  },
]);

export default router;
EOF