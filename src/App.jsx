import Divider from "./Components/Divider";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Main from "./Components/Main";
import Blogs from "./Components/Blogs";
import Aside from "./Components/Aside";
import { useState } from "react";
import ListItem from "./Components/ListItem";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readBlogs, setReadBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);

  function clickToBookmark(singleBlog) {
    setBookmarked([...bookmarked, singleBlog]);
  }
  function clickToMarkRead(singleBlog) {
    setReadBlogs([...readBlogs, singleBlog]);
    setReadTime(readTime + singleBlog.reading_time);

    // remove from bookmarked
    const newBookmarked = bookmarked.filter(
      (item) => item.id !== singleBlog.id
    );
    setBookmarked([...newBookmarked]);
  }
  return (
    <>
      <Header></Header>
      <Container>
        <Divider />
      </Container>
      <Main>
        <Container className="lg:flex gap-8 justify-between">
          <Blogs
            bookmarkFunc={clickToBookmark}
            markAsReadFunc={clickToMarkRead}
          />
          <Aside>
            <div className="spend-time border-2 border-blue-600 text-blue-600 text-sm p-5 font-semibold text-center bg-gray-100 rounded-lg">
              Spent time on read {readTime ? `: ${readTime} min` : ""}
            </div>
            <div className="bookmarks bg-gray-200 p-5 rounded-lg mt-5 space-y-5">
              <h4 className="font-semibold text-xl">
                Bookmarked Blogs: {bookmarked.length}
              </h4>
              <ul className="bookmark-list space-y-3">
                {bookmarked.map((item) => (
                  <ListItem key={item.id}>{item.title}</ListItem>
                ))}
              </ul>
            </div>
          </Aside>
        </Container>
      </Main>
    </>
  );
}

export default App;
