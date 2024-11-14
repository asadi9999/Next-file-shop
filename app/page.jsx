import '../styles/globals.css'
import SliderFour from "@/components/mainSlider";
import ProductSlider from "@/components/product-slider";
import MiddleBanner from '@/components/middle-banner';
import MainCategories from '@/components/graphic-cat';
import GraphicSlider from '@/components/graphic-slider';
import NewBlog from '@/components/newBlog';

const Home = () => {
   return (
      <div className=" container mx-auto" style={{ fontFamily: 'shabnam' }}>
         <main className=" flex flex-col justify-center items-center gap-12 ">
            <SliderFour />
            <ProductSlider title={'اپلیکیشنها'} LinkComp={'apps'} />
            <MiddleBanner />
            <ProductSlider title={'کتابها'} LinkComp={'books'} />
            <MainCategories />
            <GraphicSlider />
            <NewBlog />
            
         </main>
      </div>
   );
}

export default Home;

