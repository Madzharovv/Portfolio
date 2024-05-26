import { lastIndexOf } from 'lodash';
import {navRoutes} from '../../assets/'
const Navbar = ()=>{

return (
<ul>
    {Routes.navRoutes.map((title, href)=> (       
    
    <li><a>{navRoutes.title}</a></li> ))}
</ul>
)
};