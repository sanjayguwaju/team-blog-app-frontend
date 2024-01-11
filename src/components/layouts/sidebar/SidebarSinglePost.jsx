import Card from "../../ui/card/Card";
import Categories from "../../ui/categories/Categories";
import Newsletter from "../../ui/newsletter/Newsletter";
import RecentPostWidget from "../../ui/recent-card/RecentPostWidget";
import TagCloud from "../../ui/tagcloud/TagCloud";
import AboutAuthor from "../../ui/about-author/AboutAuthor";
const SidebarSinglePost = () => {
  return (
    <>
      <AboutAuthor />
      <br/>
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

export default SidebarSinglePost;