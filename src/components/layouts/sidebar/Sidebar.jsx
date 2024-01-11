import Card from "../../ui/card/Card";
import PopularCard from "../../ui/popular-card/PopularCard";
import RecentCard from "../../ui/recent-card/RecentCard";
import Categories from "../../ui/categories/Categories";
import Newsletter from "../../ui/newsletter/Newsletter";
import RecentPostWidget from "../../ui/recent-card/RecentPostWidget";
import TagCloud from "../../ui/tagcloud/TagCloud";
const Sidebar = () => {
  return (
    <>
      <PopularCard />
      <RecentCard />
      <br />
      <Categories />
      <br />
      <TagCloud />
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
