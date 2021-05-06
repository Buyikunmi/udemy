/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import Footer from "./pages/static/Footer";
import Preloader from "./pages/static/Preloader";
import Header from "./pages/static/Header";
import PreFooter from "./pages/static/PreFooter";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import BooksDetail from "./pages/BooksDetail";
import StudentProfile from "./pages/StudentProfile";
import Privacy from "./pages/Privacy";
import Pricing from "./pages/Pricing";
import ComingSoon from "./pages/ComingSoon";
import CoursePath from "./pages/CoursePath";
import CourseLesson from "./pages/CourseLesson";
import EditProfile from "./pages/EditProfile";
import Books from "./pages/Books";

function App() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/courses" component={Courses} />
          {/* <Route path="/blog" component={Blog} /> */}
          <Route path="/books/books-detail" component={BooksDetail} />
          <Route path="/books" component={Books} />
          <Route path="/student-profile" component={StudentProfile} />
          <Route path="/instructor-profile" component={StudentProfile} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="courses/course-path" component={CoursePath} />
          <Route path="courses/course-lesson" component={CourseLesson} />
          <Route path="/profile/edit" component={EditProfile} />
          <Route path="/" component={Home} />
        </Switch>
      </main>

      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
