
import ReactDOM from 'react-dom/client'

import './index.css'
import { Form } from './Form'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <Form firstName={''} lastName={''} email={''} phone={''}></Form>
)
