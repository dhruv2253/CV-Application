
import ReactDOM from 'react-dom/client'

import './index.css'
import { Form } from './Form'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
      <h1>Application</h1>
      <Form firstName={''} lastName={''} email={''} phone={''}></Form>
  </div>

)
