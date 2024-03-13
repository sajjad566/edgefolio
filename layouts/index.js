import dynamic from 'next/dynamic'

const layouts = {
  About: dynamic(() => import(`@/layouts/About`)),
  Contact: dynamic(() => import(`@/layouts/Contact`)),
  Services: dynamic(() => import(`@/layouts/Services`)),
  Home: dynamic(() => import(`@/layouts/Home`)),
  'Home-2': dynamic(() => import(`@/layouts/Home-2`)),
  Post: dynamic(() => import(`@/layouts/Post`)),
  Blog: dynamic(() => import(`@/layouts/Blog`)),
  Projects: dynamic(() => import(`@/layouts/Projects`)),
  Fallback: dynamic(() => import(`@/layouts/Fallback`)),
  Blank: dynamic(() => import(`@/layouts/Blank`)),
  BlankCentered: dynamic(() => import(`@/layouts/BlankCenter`)),
}

export default layouts
