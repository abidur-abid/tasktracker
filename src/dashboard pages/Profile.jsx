
import DashboardProfile from '../components/DashboardProfile';
import SectionTitle from '../shared components/SectionTitle'

const Profile = () => {


  return (
    <div className='md:-ml-60 lg:-ml-60'>
     <SectionTitle title='Your Profile'></SectionTitle>
     <DashboardProfile></DashboardProfile>
    </div>
  );
};


export default Profile;