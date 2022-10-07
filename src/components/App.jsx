// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import Profile from "./Profile/Profile";
import User from './Profile/user.json';
export default function App(){
  return <div>
    <User 
  avatar={user.avatar} 
  username={user.username} 
  tag={user.tag} 
  location={user.location} 
  stats={user.stats}/> </div>;
}