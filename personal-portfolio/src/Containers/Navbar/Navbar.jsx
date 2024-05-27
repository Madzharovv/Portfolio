import { lastIndexOf } from 'lodash';
import {Routes} from '../../assets/'

export const Navbar = ()=>{

return (
<ul>
    {Routes.map((route)=> {
        const {title, href}=route;
    return(<li><a>{route.title}</a></li>);
})}
    

</ul>
)
};