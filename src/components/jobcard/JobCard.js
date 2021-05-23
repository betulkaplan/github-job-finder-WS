import React from 'react';
import './JobCard.css';
import jobLogo from '../../assets/job-logo.svg';

function JobCard({ job }) {
  let ID = 'id-' + job.id;
  return (
    <div className="job-card">
      <div className="logo">
        <img src={job.company_logo ?? jobLogo} alt="" />
      </div>

      <div className="title">
        <h3>{job.title}</h3>
      </div>

      <div className="company">
        <h4>{job.company}</h4>
      </div>

      <div className="type">
        <p>{job.type}</p>
      </div>

      <a className="link" href={job.company_url}>
        <button className="custom-btn" type="button">
          Apply
        </button>
      </a>

      <button
        type="button"
        className="custom-btn details"
        data-bs-toggle="modal"
        data-bs-target={'#' + ID}
      >
        Details
      </button>

      <div
        className="modal fade"
        id={ID}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {job.title}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="extra">
                <div className="description">
                  <h3>Job Description</h3>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: `${job.description}` }}
                  />
                </div>
                <div className="how-to-apply">
                  <h3>How to Apply?</h3>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: `${job.how_to_apply}`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="custom-btn details"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a className="link" href={job.company_url}>
                <button className="custom-btn" type="button">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

JobCard.defaulProps = {
  company_logo:
    'https://media-exp1.licdn.com/dms/image/C4D0BAQHluPICZRkHsA/company-logo_200_200/0/1577449468769?e=2159024400&v=beta&t=SU8ArbCWLdttCIu6Qpc89ppAabgH_Q4r4ERr78bOP28',
  title: 'Fullstack Developer',
  company: 'Clarusway',
  type: 'Full-time',
  company_url: 'https://clarusway.com/',
  id: 'xyz',
};

export default JobCard;
