import { MantineProvider } from '@mantine/core'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { ModalsProvider } from '@mantine/modals'

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

function App() {

  return (
    <MantineProvider >
      <ModalsProvider>
      <RouterProvider router={routes} />
      </ModalsProvider>
    </MantineProvider>

  )
}

export default App
