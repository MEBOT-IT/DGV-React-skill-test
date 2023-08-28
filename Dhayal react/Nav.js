import {Link} from 'react-router-dom';

const Navjs=()=>{
  return (
    <nav>
      <ul className='nav-list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='About'>About</Link></li>
        <li><Link to='Contact'>Contact</Link></li>
      </ul>
    </nav>
  );

}
export default Navjs;