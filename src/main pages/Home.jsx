import Hero from '../components/Hero'
import SectionTitle from '../shared components/SectionTitle'
import Gallery from '../components/Gallery'

const Home = () => {
    return (
        <>
         <Hero></Hero>
         <SectionTitle title={'Who Can Use This'}></SectionTitle>
         <Gallery></Gallery>
        </>
    );
};

export default Home;