import Card from "./Card";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import RecentCard from "./RecentCard";
import PopularCard from "./PopularCard";
import RecentPostWidget from "./RecentPostWidget";
import TagCloud from "./TagCloud";
const Sidebar = () => {
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <Categories />
      <br />
      <TagCloud />
      <br />
      <RecentCard/>
      <br />
      <PopularCard/>
      <br />
      <Card />
      <br />
      <RecentPostWidget />
      <br />
      <Newsletter />
      <br />
    </>
  );
};

export default Sidebar;
