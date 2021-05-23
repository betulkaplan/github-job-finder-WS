import './App.css';
import loading from './assets/loading.gif';
import notFound from './assets/404.png';
import Form from './components/from/Form';
import JobCard from './components/jobcard/JobCard';
import Header from './components/header/Header';
import axios from 'axios';
import { useState } from 'react';
import Footer from './components/footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setjobs] = useState();

  const newQuery = (description, location) => {
    setIsLoading(true);
    axios({
      method: 'get',
      url: `/positions.json?description=${description}&location=${location}`,
    })
      .then((res) => {
        setjobs(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <Header />
      <Form newQuery={newQuery} />
      {jobs?.length === 0 ? <img src={notFound} alt="" /> : null}
      {isLoading ? <img src={loading} alt="" srcSet="" /> : null}

      {jobs?.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
